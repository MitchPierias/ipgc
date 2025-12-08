declare module "@hcaptcha/react-hcaptcha" {
  import * as React from "react";

  interface HCaptchaState {
    isApiReady: boolean;
    isRemoved: boolean;
    elementId: string;
    captchaId: string;
  }

  interface HCaptchaProps {
    onExpire?: () => any;
    onOpen?: () => any;
    onClose?: () => any;
    onChalExpired?: () => any;
    onError?: (event: string) => any;
    onVerify?: (token: string, ekey: string) => any;
    onLoad?: () => any;
    onReady?: () => any;
    languageOverride?: string;
    sitekey: string;
    size?: "normal" | "compact" | "invisible";
    theme?: "light" | "dark" | "contrast" | Object;
    tabIndex?: number;
    id?: string;
    reCaptchaCompat?: boolean;
    loadAsync?: boolean;
    scriptLocation?: HTMLElement | null;
    sentry?: boolean;
    userJourneys?: boolean;
    cleanup?: boolean;
    custom?: boolean;
    secureApi?: boolean;
    scriptSource?: string;
  }

  interface ExecuteResponse {
    response: string;
    key: string;
  }

  declare class HCaptcha extends React.Component<HCaptchaProps, HCaptchaState> {
    resetCaptcha(): void;
    renderCaptcha(): void;
    removeCaptcha(): void;
    getRespKey(): string;
    getResponse(): string;
    setData(data: object): void;
    isReady(): boolean;
    execute(opts: { async: true; rqdata?: string }): Promise<ExecuteResponse>;
    execute(opts?: { async: false; rqdata?: string }): void;
    execute(opts?: {
      async?: boolean;
      rqdata?: string;
    }): Promise<ExecuteResponse> | void;
  }

  export default HCaptcha;
}
