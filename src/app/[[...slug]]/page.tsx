import { StoryblokStory } from "@storyblok/react/rsc";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { getStoryblokApi } from "src/lib/storyblok";
import { ScrollWheel } from "src/blocks/ScrollWheel/ScrollWheel";
import { Panel } from "src/blocks/Panel/Panel";

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
        <ScrollWheel testID="scroll-block">
          <Panel
            testID="panel"
            title={"Our facility"}
            subtitle={"Our World-class Gold Coast Facility"}
            variant={"invert"}
          />
        </ScrollWheel>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
