import React from "react";
import { Header } from "~/components/Header/Header";
import HeroVideo from "~/components/HeroVideo/HeroVideo";
import Footer from "~/components/Footer/Footer";
import { DualPanel } from "~/components/DualPanel/DualPanel";
import { Panel } from "~/components/Panel/Panel";
import { HeroBanner } from "~/components/HeroBanner/HeroBanner";
import HeroImage from "~/components/HeroImage/HeroImage";
import { ArticleCard } from "~/components/ArticleCard/ArticleCard";
import { GridLayout } from "~/components/GridLayout/GridLayout";
import { IconBlock } from "~/components/IconBlock/IconBlock";
import { ImagePanel } from "~/components/ImagePanel/ImagePanel";

export default function Home() {
  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main">
        <HeroVideo testID="hero-video" />
        <DualPanel testID="hero-section">
          <Panel
            testID="dual-panel-left"
            title={"Specialists who care"}
            subtitle={
              "We bulk bill most procedures, helping to ensure our services remain accessible to everyone."
            }
          />
          <Panel
            testID="dual-panel-right"
            description={
              "Thank you for choosing the Interventional Radiologists at IPGC. As Queensland's only clinic dedicated solely to imaging-guided spine, joint, and musculoskeletal procedures, we deliver precise, expert care with a strong focus on achieving the best outcomes and on providing exceptional patient experience."
            }
            buttonText={"Request appointment"}
          />
        </DualPanel>
        <HeroImage
          testID="hero-image"
          image="https://wholebodymri.com.au/wp-content/uploads/2024/11/cta-bg.jpg"
          title="Precision. Commitment. Compassion."
          buttonText={"Request appointment"}
        />
        <HeroBanner
          testID="hero-banner"
          title="Why Choose Us?"
          description="State of the art equipment. Respected Doctors. Unparalleled experience."
        />
        <HeroImage
          testID="hero-image"
          image="https://wholebodymri.com.au/wp-content/uploads/2024/11/cta-bg.jpg"
          title="Start your journey"
          subtitle="Why should I consider a Whole Body MRI scan?"
          description="A Whole Body MRI scan is ideal for proactive healthcare, particularly for individuals with a family history of certain diseases, those undergoing cancer treatment, or anyone seeking to take control of their health by detecting conditions early."
          buttonText={"Journey into the known with a Whole Body MRI scan"}
        />

        <div
          style={{
            width: "100%",
            overflowY: "hidden",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
              gap: "var(--size-600)",
              padding: "var(--size-600)",
            }}
          >
            <ArticleCard
              testID="article-card"
              title="Is your brain ageing faster than it should?"
              tags={["Brain health", "Conditions detected", "MRI"]}
            />
            <ArticleCard
              testID="article-card"
              title="Is your brain ageing faster than it should?"
              tags={["Brain health", "Conditions detected", "MRI"]}
            />
            <ArticleCard
              testID="article-card"
              title="Is your brain ageing faster than it should?"
              tags={["Brain health", "Conditions detected", "MRI"]}
            />
            <ArticleCard
              testID="article-card"
              title="Is your brain ageing faster than it should?"
              tags={["Brain health", "Conditions detected", "MRI"]}
            />
            <ArticleCard
              testID="article-card"
              title="The Best of Both Worlds: Why Whole Body MRI Includes Low-Dose CT Chest Screening"
              tags={["Full-body MRI", "Imaging Science", "MRI", "Screening"]}
            />
          </div>
        </div>

        <DualPanel testID="image-panel">
          <ImagePanel
            testID="image-panel"
            image="https://wholebodymri.com.au/wp-content/uploads/2024/11/experience-gallery-1.jpg"
          />
          <ImagePanel
            testID="image-panel"
            image="https://wholebodymri.com.au/wp-content/uploads/2024/11/experience-gallery-2.jpg"
          />
        </DualPanel>

        <GridLayout testID="grid-layout">
          <IconBlock
            testID="icon-block"
            title="Tailored Scanning Experience"
            description="Enjoy a painless 100-minute scan while watching your favourite movie, TV show, or listening to music of your choice."
          />
          <IconBlock
            testID="icon-block"
            title="Wide Bore MRI Scanner"
            description="Our MRI scanner is designed to minimise discomfort with its wide bore, reducing the risk of claustrophobia and ensuring a more comfortable experience."
          />
          <IconBlock
            testID="icon-block"
            title="Safe"
            description="There is no known harm from an MRI scan, making Whole Body MRI™ a safe option for thorough screening."
          />
          <IconBlock
            testID="icon-block"
            title="Unmatched Accuracy"
            description="Leveraging cutting-edge 3 Tesla MRI technology, Whole Body MRI™ offers unparalleled image quality, ensuring early and accurate detection of abnormalities."
          />
          <IconBlock
            testID="icon-block"
            title="Expertly Optimised"
            description="Each scan is meticulously calibrated by experts, guaranteeing the highest level of diagnostic confidence and ensuring reliable results every time."
          />
          <IconBlock
            testID="icon-block"
            title="Timely Reporting"
            description="Receive a comprehensive radiologist report and images within 7 days. Our reports focus on any abnormal findings, ensuring you get clear and timely information."
          />
        </GridLayout>
      </main>
      <Footer />
    </div>
  );
}
