import React from "react";
import Header from "~/components/Header/Header";
import HeroVideo from "~/components/HeroVideo/HeroVideo";
import Footer from "~/components/Footer/Footer";
import { DualPanel } from "~/components/DualPanel/DualPanel";
import { Panel } from "~/components/Panel/Panel";
import { HeroBanner } from "~/components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main">
        <HeroVideo />
        <DualPanel testID="hero-section">
          <Panel
            testID="dual-panel-left"
            variant="left"
            title={"Specialists who care"}
            description={
              "We bulk bill most procedures, helping to ensure our services remain accessible to everyone."
            }
          />
          <Panel
            testID="dual-panel-right"
            variant="right"
            description={
              "Thank you for choosing the Interventional Radiologists at IPGC. As Queensland's only clinic dedicated solely to imaging-guided spine, joint, and musculoskeletal procedures, we deliver precise, expert care with a strong focus on achieving the best outcomes and on providing exceptional patient experience."
            }
          />
        </DualPanel>
        <HeroBanner
          testID="hero-banner"
          title="Why Choose Us?"
          description="State of the art equipment. Respected Doctors. Unparalleled experience."
        />
      </main>
      <Footer />
    </div>
  );
}
