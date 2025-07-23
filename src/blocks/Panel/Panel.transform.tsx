import { Panel as PanelComponent } from "./Panel";

export type PanelBlok = {
  _uid: string;
  component: "Panel";
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  variant?: "overlay" | "invert";
};

export const Panel = ({ blok }: { blok: PanelBlok }) => {
  return (
    <PanelComponent
      testID={"panel"}
      title={blok.title}
      subtitle={blok.subtitle}
      description={blok.description}
      buttonText={blok.buttonText}
      variant={blok.variant}
    />
  );
};
