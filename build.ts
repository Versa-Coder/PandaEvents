import { readFileSync, renameSync, unlink } from "fs";
import path from "path";
import { exec, ExecException } from "child_process";

(async function () {
  const cdnTagRemovalReg =
    /(\/\/(\s)*#CDN_REMOVE)(.|\n(?!\/\/#{1,2}CDN_REMOVE))+(\n|\s)*(\/\/##CDN_REMOVE)/g;
  const removExportRegex = /export(\s)+(default)?/g;

  const name = "panda-events";

  const cdnName = `${name}.js`;
  const cdnMinName = `${name}.min.js`;

  const baseDir = __dirname;
  const sourceDir = path.join(baseDir, "src");
  const sourceFile = path.join(sourceDir, "index.ts");
  const tempSourceFile = path.join(sourceDir, "index.temp.ts");

  const cdnPath = path.join(baseDir, "dist/cdn");

  const esmPath = path.join(baseDir, "dist/esm");
  const esmName = path.join(esmPath, `${name}.esm.js`);
  const esmMinName = path.join(esmPath, `${name}.esm.min.js`);

  const execShell = function (
    cmd: string
  ): Promise<ExecException | { stdout: string; stderr: string }> {
    return new Promise(function (resolve, reject) {
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        } else {
          resolve({ stdout, stderr });
        }
      });
    });
  };

  // Create NPM build
  await execShell("tsc");

  // Create CDN-ESM build
  const esmSrcName = `${path.join(esmPath)}/index.js`;
  await execShell(`tsc -p cdn-config/esm`);
  await execShell(`minify ${esmSrcName} > ${esmMinName}`);
  await renameSync(esmSrcName, esmName);

  //Create CDN build
  let script = await readFileSync(sourceFile, "utf-8");
  script = script.replace(cdnTagRemovalReg, "");
})();