import { StoryblokStory } from "@storyblok/react/rsc";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { getStoryblokApi } from "src/lib/storyblok";
import { Section } from "src/blocks/Section/Section";
import Image from "next/image";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { BlockHeader } from "src/blocks/BlockHeader/BlockHeader";
import { Heading, Paragraph, Subtitle } from "src/elements/Text/Text";
import { Panel } from "src/blocks/Panel/Panel";
import { LayoutPanel } from "src/blocks/LayoutPanel/LayoutPanel";
import { BlankBlock } from "src/blocks/BlankBlock/BlankBlock";
import styles from "./page.module.css";
import { ImagePanel } from "src/blocks/ImagePanel/ImagePanel";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/team`, {
    version: "draft",
  });

  const body = data.story.content.body;

  const layout = body.find(
    (content: any) => content.component === "GridLayout"
  )?.contents;

  const profile = layout.find((content: any) => content._uid === id);

  console.log("PROFILE", JSON.stringify(profile, null, 2));

  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main">
        <BlankBlock testID="blank-block" />
        <Section testID="section">
          <LayoutPanel
            testID="layout-panel"
            columns={2}
            size="gutter"
            className={styles.layout}
          >
            <ImagePanel
              testID="image-panel"
              image={profile.image}
              width={960}
              height={960}
            />
            <Panel testID="panel">
              <BlockLayout testID="block-layout">
                <Paragraph testID="subtitle" uppercase component="p">
                  {profile.title}
                </Paragraph>
                <Heading testID="heading">{profile.name}</Heading>
                <Paragraph testID="paragraph">{profile.bio}</Paragraph>
              </BlockLayout>
            </Panel>
          </LayoutPanel>
        </Section>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
