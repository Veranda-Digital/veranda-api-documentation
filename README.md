# veranda-api-documentation

Canonical API contract and documentation for Veranda Digital.

| Resource | Location |
| -------- | -------- |
| Current OpenAPI | [`openapi.yaml`](openapi.yaml) |
| Agent index | [`AGENTS.md`](AGENTS.md) |
| Hosted docs | [api-docs.getveranda.com](http://api-docs.getveranda.com) |
| Legacy spec (historical) | [`archive/openapi-legacy.yaml`](archive/openapi-legacy.yaml) |

## Preview locally

```bash
npm install -g @redocly/cli
redocly preview-docs openapi.yaml
```

## Submodule consumers

**VerandaApp** and **veranda-serverless-backend** pin this repo at `contract/`. After clone:

```bash
git submodule update --init --recursive
```
