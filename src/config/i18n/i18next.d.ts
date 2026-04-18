import "react-i18next";
import enLang from "./locales/en/us.json";
import brLang from "./locales/pt/br.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "enDefs";
    resources: {
      brDefs: typeof brLang;
      enDefs: typeof enLang;
    };
  }
}
