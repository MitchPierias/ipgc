import { StoryblokStory } from "@storyblok/react/rsc";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { getStoryblokApi } from "src/lib/storyblok";
import { ScrollWheel } from "src/blocks/ScrollWheel/ScrollWheel";
import { Panel } from "src/blocks/Panel/Panel";
import { ParallaxStack } from "src/blocks/ParallaxStack/ParallaxStack";
import { Heading, Text } from "src/elements/Text/Text";
import { BlockIcon } from "src/elements/Icons/BlockIcon";
import { Typewriter } from "~/components/Typewriter/Typewriter";
import { MosaicLayout } from "src/blocks/MosaicLayout/MosaicLayout";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const fullSlug = slug ? slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
    version: "draft",
  });

  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main">
        <StoryblokStory story={data.story} />

        <MosaicLayout testID="mosaic-layout" />

        <ParallaxStack testID="parallax-stack">
          <Panel testID="panel" variant={"glass"}>
            <div style={{ width: "2rem", height: "2rem" }}>
              <BlockIcon />
            </div>
            <Heading testID={`subtitle`} animate>
              Referral
            </Heading>
            <Text testID={`title`} animate>
              Speak to your GP or specialist about obtaining a referral to IPGC.
            </Text>
          </Panel>
          <Panel testID="panel" variant={"glass"}>
            <div style={{ width: "2rem", height: "2rem" }}>
              <BlockIcon />
            </div>
            <Heading testID={`subtitle`} animate>
              Book
            </Heading>
            <Text testID={`title`} animate>
              Call one of our friendly team members to book your appointment
            </Text>
          </Panel>
          <Panel testID="panel" variant={"glass"}>
            <div style={{ width: "2rem", height: "2rem" }}>
              <BlockIcon />
            </div>
            <Heading testID={`subtitle`} animate>
              Visit
            </Heading>
            <Text testID={`title`} animate>
              Attend one of our dedicated facilities for expert care.
            </Text>
          </Panel>
        </ParallaxStack>

        <ScrollWheel testID="scroll-block">
          <Panel
            testID="panel"
            subtitle={"Conditions we treat"}
            variant={"invert"}
          />
        </ScrollWheel>

        <Typewriter
          testID="typewriter"
          title="The team you can trust."
          subtitle="We have recruited a team of doctors with the highest level of expertise."
          action={{
            label: "About us",
            href: "/about",
          }}
        />
      </main>
      <Footer testID="footer" />
    </div>
  );
}
