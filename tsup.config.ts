import { defineConfig } from "tsup"

export default defineConfig({
    format: ["cjs", "esm"],
    entry: ['./lib/index.ts', "./lib/experimental/index.ts"],
    outDir: "./dist",
    skipNodeModulesBundle: true,
    dts: true
})
