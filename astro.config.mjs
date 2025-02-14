// @ts-check
import { defineConfig } from "astro/config";
import Process from "process";

const isProdBuild = Process.env.NODE_ENV !== "development";

// https://astro.build/config
export default defineConfig({
  //site: "https://www.EXAMPLE.com/", // TODO: Add your site URL
  base: "/",
  trailingSlash: "always",
  output: "static",
  srcDir: "src",
  publicDir: "public",
  outDir: "dist",
  cacheDir: "./node_modules/.astro",
  compressHTML: isProdBuild,
  scopedStyleStrategy: "attribute",
  build: {
    format: "directory",
    redirects: true,
    inlineStylesheets: "auto",
  },
  server: {
    host: false,
    port: 4321,
    open: false,
  },
});
