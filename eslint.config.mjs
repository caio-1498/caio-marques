import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals.js";
import nextTs from "eslint-config-next/typescript.js";

// Since I am unsure if the project has @eslint/eslintrc installed (it's new in Next 15 defaults?), I will try the simpler fix first:
// Revert to the default eslint config format or try to fix the import.
// The error suggested adding `.js`.
// `import nextVitals from "eslint-config-next/core-web-vitals.js";`
// Let's try that.


const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
