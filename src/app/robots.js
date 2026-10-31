export const dynamic = "force-static";

export default function robots() {

  const baseUrl =
    "https://avantaraspathane.best-spa.in";

  return {

    rules: {

      userAgent: "*",

      allow: "/",

    },

    sitemap:
      `${baseUrl}/sitemap.xml`,

  };

}