# gantry-ci-sandbox

Sandbox for timing the install of the Gantry CLI release tarball in a hosted runner.

The release `v0.1.0-sandbox.1` carries `gantry-0.1.0.tgz` and its `.sha256`, built from
[architecture-visualization-cc-plugin](https://github.com/jbknick/architecture-visualization-cc-plugin) at 3f86b0f.

`.github/workflows/time-install.yml` is run by hand (`workflow_dispatch`, input `files`: 1000, 5000 or 10000). For a
pinned public TypeScript repo of that size it runs 3 jobs, each on a fresh `ubuntu-latest` runner, and times: install
(download, checksum, `npm ci`), `gantry init`, `gantry review <parent>...<sha> --json`, `gantry duplicates --json`, and
a comment create and update. Each job prints its timings as JSON and uploads them as an artifact. The workflow checks
the tarball's sha256 before installing, pins every action by commit SHA, uses no secrets and asks for `contents: read`
only.
