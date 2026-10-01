import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const outputFile = process.env.GITHUB_OUTPUT;

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}

function main() {
  const version = readOpenApiVersion();
  const tagName = `contract-v${version}`;
  const head = git(["rev-parse", "HEAD"]);

  if (tagPointsAtHead(tagName, head)) {
    console.log(`Tag ${tagName} already points at ${head}; skipping.`);
    writeOutput("created", "false");
    writeOutput("tag_name", tagName);
    writeOutput("version", version);
    return;
  }

  if (tagExists(tagName)) {
    const existing = git(["rev-list", "-n", "1", tagName]);
    fail(
      `Tag ${tagName} already exists at ${existing} but HEAD is ${head}. Bump info.version in openapi.yaml before merging.`,
    );
  }

  git(["tag", "-a", tagName, "-m", `Contract release ${version}`]);
  git(["push", "origin", tagName]);
  console.log(`Created and pushed ${tagName} at ${head}.`);
  writeOutput("created", "true");
  writeOutput("tag_name", tagName);
  writeOutput("version", version);
}

function readOpenApiVersion() {
  const text = readFileSync("openapi.yaml", "utf8");
  const match = text.match(/\n  version:\s*["']?([0-9]+\.[0-9]+\.[0-9]+)/);
  if (!match) {
    fail("Could not read semver info.version from openapi.yaml (expected X.Y.Z).");
  }
  return match[1];
}

function tagExists(name) {
  try {
    git(["rev-parse", `refs/tags/${name}^{commit}`]);
    return true;
  } catch {
    return false;
  }
}

function tagPointsAtHead(name, head) {
  if (!tagExists(name)) return false;
  const at = git(["rev-list", "-n", "1", name]);
  return at === head;
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

function writeOutput(name, value) {
  if (!outputFile) return;
  appendFileSync(outputFile, `${name}=${value}\n`);
}

function fail(message) {
  console.error(`::error::${message}`);
  process.exit(1);
}
