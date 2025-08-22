import { pathToFileURL, fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const srcDir = pathToFileURL(path.resolve("./src")).href + "/";

export function resolve(specifier, context, defaultResolve) {
  if (specifier.startsWith("@/")) {
    const newSpecifier = specifier.replace("@/", srcDir);
    if (!path.extname(newSpecifier)) {
      const jsSpecifier = newSpecifier + ".js";
      try {
        const filePath = fileURLToPath(jsSpecifier);
        if (fs.existsSync(filePath)) {
          console.log(`✅ Found with .js extension: ${jsSpecifier}`);
          return defaultResolve(jsSpecifier, context, defaultResolve);
        }
      } catch (err) {
        console.log(`❌ Error checking .js extension:`, err.message);
      }
    }
    return defaultResolve(newSpecifier, context, defaultResolve);
  }
  return defaultResolve(specifier, context, defaultResolve);
}
