#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(process.cwd(), 'components');
const DRY_RUN = process.argv.includes('--dry-run');

// ANSI color codes for better output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, message) {
  log(`${step}. ${message}`, 'cyan');
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

// Get all files in components directory
function getComponentFiles() {
  if (!fs.existsSync(COMPONENTS_DIR)) {
    logError(`Components directory not found: ${COMPONENTS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isFile())
    .map(dirent => dirent.name);

  return files;
}

// Extract component name from filename
function getComponentName(filename) {
  const match = filename.match(/^([A-Z][a-zA-Z0-9]+)\.(tsx?|module\.css)$/);
  return match ? match[1] : null;
}

// Group files by component name
function groupComponentFiles(files) {
  const groups = {};

  files.forEach(file => {
    const componentName = getComponentName(file);
    if (componentName) {
      if (!groups[componentName]) {
        groups[componentName] = {};
      }

      if (file.endsWith('.module.css')) {
        groups[componentName].styles = file;
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        groups[componentName].component = file;
      }
    }
  });

  return groups;
}

// Create directory if it doesn't exist
function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    if (DRY_RUN) {
      logInfo(`[DRY RUN] Would create directory: ${dirPath}`);
    } else {
      fs.mkdirSync(dirPath, { recursive: true });
      logSuccess(`Created directory: ${dirPath}`);
    }
  }
}

// Move file to new location
function moveFile(oldPath, newPath) {
  if (DRY_RUN) {
    logInfo(`[DRY RUN] Would move: ${oldPath} → ${newPath}`);
  } else {
    fs.renameSync(oldPath, newPath);
    logSuccess(`Moved: ${path.basename(oldPath)} → ${newPath}`);
  }
}

// Update import path in a TypeScript/JavaScript file
function updateImportPath(filePath, oldImport, newImport) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = content.replace(
    new RegExp(`from\\s+['"]${oldImport.replace('.', '\\.')}['"]`, 'g'),
    `from '${newImport}'`
  );

  if (content !== updatedContent) {
    if (DRY_RUN) {
      logInfo(`[DRY RUN] Would update import in: ${filePath}`);
      logInfo(`  ${oldImport} → ${newImport}`);
    } else {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      logSuccess(`Updated import in: ${path.basename(filePath)}`);
      logInfo(`  ${oldImport} → ${newImport}`);
    }
    return true;
  }
  return false;
}

// Update all import references to moved components
function updateImportReferences(componentName, groups) {
  const searchPaths = [
    path.join(process.cwd(), 'app'),
    path.join(process.cwd(), 'components'),
    path.join(process.cwd(), 'src')
  ].filter(p => fs.existsSync(p));

  const oldImportPath = `./components/${componentName}`;
  const newImportPath = `./components/${componentName}`;
  const oldStylesImportPath = `./components/${componentName}.module.css`;
  const newStylesImportPath = `./components/${componentName}/styles.module.css`;

  function scanDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.name.match(/\.(tsx?|jsx?)$/)) {
        // Update component imports
        updateImportPath(fullPath, `../components/${componentName}`, `../components/${componentName}`);
        updateImportPath(fullPath, `./components/${componentName}`, `./components/${componentName}`);
        updateImportPath(fullPath, `@/components/${componentName}`, `@/components/${componentName}`);
        
        // Update styles imports
        updateImportPath(fullPath, `./${componentName}.module.css`, `./styles.module.css`);
        updateImportPath(fullPath, `./components/${componentName}.module.css`, `./components/${componentName}/styles.module.css`);
      }
    }
  }

  searchPaths.forEach(searchPath => {
    if (fs.existsSync(searchPath)) {
      scanDirectory(searchPath);
    }
  });
}

// Main reorganization function
function reorganizeComponents() {
  log('🚀 Starting component reorganization...', 'bright');
  
  if (DRY_RUN) {
    log('🔍 DRY RUN MODE - No files will be moved', 'yellow');
  }

  logStep(1, 'Scanning components directory...');
  const files = getComponentFiles();
  logInfo(`Found ${files.length} files`);

  logStep(2, 'Grouping components...');
  const groups = groupComponentFiles(files);
  const componentNames = Object.keys(groups);
  logInfo(`Found ${componentNames.length} components: ${componentNames.join(', ')}`);

  if (componentNames.length === 0) {
    logWarning('No components found to reorganize');
    return;
  }

  logStep(3, 'Creating component directories and moving files...');
  
  for (const [componentName, fileGroup] of Object.entries(groups)) {
    log(`\n📁 Processing ${componentName}...`, 'magenta');
    
    const componentDir = path.join(COMPONENTS_DIR, componentName);
    ensureDirectory(componentDir);

    // Move component file to index.tsx
    if (fileGroup.component) {
      const oldComponentPath = path.join(COMPONENTS_DIR, fileGroup.component);
      const newComponentPath = path.join(componentDir, 'index.tsx');
      moveFile(oldComponentPath, newComponentPath);

      // Update the styles import in the moved component file
      if (fileGroup.styles && fs.existsSync(newComponentPath)) {
        updateImportPath(newComponentPath, `./${componentName}.module.css`, './styles.module.css');
      }
    }

    // Move styles file
    if (fileGroup.styles) {
      const oldStylesPath = path.join(COMPONENTS_DIR, fileGroup.styles);
      const newStylesPath = path.join(componentDir, 'styles.module.css');
      moveFile(oldStylesPath, newStylesPath);
    }

    // Check for incomplete groups
    if (!fileGroup.component) {
      logWarning(`Component file not found for ${componentName}`);
    }
    if (!fileGroup.styles) {
      logWarning(`Styles file not found for ${componentName}`);
    }
  }

  logStep(4, 'Updating import references...');
  componentNames.forEach(componentName => {
    updateImportReferences(componentName, groups);
  });

  log('\n🎉 Component reorganization completed!', 'green');
  
  if (DRY_RUN) {
    log('\nTo execute the changes, run this script without --dry-run flag', 'yellow');
  } else {
    log('\nNew structure:', 'bright');
    componentNames.forEach(name => {
      log(`  components/${name}/`, 'cyan');
      log(`    ├── index.tsx`, 'blue');
      log(`    └── styles.module.css`, 'blue');
    });
  }
}

// Run the script
try {
  reorganizeComponents();
} catch (error) {
  logError(`Script failed: ${error.message}`);
  console.error(error);
  process.exit(1);
} 