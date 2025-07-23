import styles from "./SocialLinks.module.css";
import Link from "next/link";

type MetaLink = {
  name: string;
  href: string;
  icon: string;
};

interface SocialLinksProps extends Common.ComponentProps {
  items: MetaLink[];
}

export const SocialLinks = ({ testID, ...props }: SocialLinksProps) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      {props.items.map((social) => (
        <Link
          key={social.name}
          className={styles.link}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={social.icon} alt={social.name} className={styles.icon} />
        </Link>
      ))}
    </div>
  );
};
