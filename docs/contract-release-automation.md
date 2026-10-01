# Contract release automation

## On merge to `master`

1. **Validate OpenAPI** runs (Redocly lint).
2. **Tag contract release** runs after a successful push build:
   - Reads `info.version` from `openapi.yaml` (semver `X.Y.Z`).
   - Creates annotated tag `contract-vX.Y.Z` on the merge commit and pushes it.
   - Skips if that tag already points at the same commit.
   - **Fails** if the tag exists on a different commit (bump `info.version` in your PR).

## Consumer submodule bump PRs

When repository secret **`CONTRACT_CONSUMER_BUMP_TOKEN`** is set, the tag workflow opens pull requests:

| Repository | Base branch |
| ---------- | ----------- |
| `Veranda-Digital/veranda-serverless-backend` | `master` |
| `Veranda-Digital/VerandaApp` | `main` |

Branch name: `chore/bump-contract-contract-vX.Y.Z`.

### Creating `CONTRACT_CONSUMER_BUMP_TOKEN`

Use a fine-grained PAT or classic PAT owned by a bot/service account:

- **Read** on `veranda-api-documentation`
- **Read and write** (contents + pull requests) on `veranda-serverless-backend` and `VerandaApp`

Add the secret in **veranda-api-documentation** → Settings → Secrets and variables → Actions.

If the secret is unset, tagging still runs; bump PRs are skipped.

## Manual release checklist

1. Bump `info.version` in `openapi.yaml` and note changes in `CHANGELOG.md`.
2. Merge PR to `master`.
3. Confirm **Tag contract release** succeeded and tag exists.
4. Merge automated bump PRs in app repos (or bump `contract/` yourself).
