import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
  localePrefix: "always", 
  localeDetection: false, 
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
