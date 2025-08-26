import { ParallaxVideoSection } from "./ParallaxVideoSection";

const transform = (data: any) => {
  return {
    component: ParallaxVideoSection,
    props: {
      testID: data._uid,
      media: data.media?.filename
        ? {
            type: "video",
            src: data.media.filename,
            format: data.media.content_type || "video/mp4",
          }
        : undefined,
      backgroundSpeed: data.background_speed || 0.2,
      contentSpeed: data.content_speed || 0.6,
      width: data.width || "full",
      height: data.height || "full",
      padded: data.padded || false,
    },
    children: data.body,
  };
};

export default transform;
