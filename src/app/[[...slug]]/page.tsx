import { StoryblokStory } from "@storyblok/react/rsc";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { getStoryblokApi } from "src/lib/storyblok";

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
      </main>
      <Footer testID="footer" />
    </div>
  );
}
