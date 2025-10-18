import { StoryblokStory } from "@storyblok/react/rsc";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { getStoryblokApi } from "src/lib/storyblok";
import { ScrollWheel } from "src/blocks/ScrollWheel/ScrollWheel";
import { Panel } from "src/blocks/Panel/Panel";
import { ParallaxStack } from "src/blocks/ParallaxStack/ParallaxStack";
import { Heading, Text } from "src/elements/Text/Text";
import { BlockIcon } from "src/elements/Icons/BlockIcon";
import { Section } from "src/blocks/Section/Section";
import { Typewriter } from "~/components/Typewriter/Typewriter";

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
      <main role="main" style={{ marginTop: "-162px" }}>
        <StoryblokStory story={data.story} />
        <ParallaxStack testID="parallax-stack">
          <Panel testID="panel" variant={"glass"}>
            <div style={{ width: "2rem", height: "2rem" }}>
              <BlockIcon />
            </div>
            <Heading testID={`subtitle`} animate>
              1 in 3
            </Heading>
            <Text testID={`title`} animate>
              patients discover early signs of possible future disease
            </Text>
          </Panel>
          <Panel testID="panel" variant={"glass"}>
            <div style={{ width: "2rem", height: "2rem" }}>
              <BlockIcon />
            </div>
            <Heading testID={`subtitle`} animate>
              8%
            </Heading>
            <Text testID={`title`} animate>
              patients have uncovered a serious heart problem
            </Text>
          </Panel>
          <Panel testID="panel" variant={"glass"}>
            <div style={{ width: "2rem", height: "2rem" }}>
              <BlockIcon />
            </div>
            <Heading testID={`subtitle`} animate>
              50%
            </Heading>
            <Text testID={`title`} animate>
              of members shows an improvement in their metabolic health in their
              6 month re-testing
            </Text>
          </Panel>
        </ParallaxStack>
        <ScrollWheel testID="scroll-block">
          <Panel
            testID="panel"
            title={"Our facility"}
            subtitle={"Our World-class Gold Coast Facility"}
            variant={"invert"}
          />
        </ScrollWheel>
        <Section
          testID="section"
          media={{
            type: "image",
            format: "jpg",
            src: "/images/team-background.jpg",
          }}
          width="full"
        >
          <Typewriter
            testID="typewriter"
            title="The team you can trust."
            subtitle="We have recruited a team of doctors with the highest level of expertise."
            action={{
              label: "About us",
              href: "/about",
            }}
          />
        </Section>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
