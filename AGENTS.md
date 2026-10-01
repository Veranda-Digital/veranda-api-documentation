# veranda-api-documentation

Canonical HTTP API contract for Veranda (OpenAPI + shared docs). Application repos consume this repository as a **git submodule** at `contract/`.

## Repositories

See [`docs/repositories.md`](docs/repositories.md) for GitHub URLs (mobile, backend, this repo).

## Read order

1. [`openapi.yaml`](openapi.yaml) — methods, paths, auth, request/response schemas (in progress; paths added in waves)
2. [`docs/shared-envelope.md`](docs/shared-envelope.md) — `{ data, metadata }` and pagination
3. [`docs/websocket.md`](docs/websocket.md) — WebSocket protocol (not in OpenAPI)
4. **Backend implementers:** [`docs/backend-contract.md`](docs/backend-contract.md)
5. **Mobile client:** [`docs/mobile-client-contract.md`](docs/mobile-client-contract.md)
6. **Reconciliation:** [`docs/endpoint-inventory.md`](docs/endpoint-inventory.md)

Legacy OpenAPI 3.0 spec (historical only): [`archive/openapi-legacy.yaml`](archive/openapi-legacy.yaml).

## Change workflow

1. Open a pull request **here** first (spec + contract markdown + `CHANGELOG.md`).
2. **Bump `info.version`** in `openapi.yaml` when the contract release should get a new tag (semver `X.Y.Z`).
3. Merge to `master`. CI tags `contract-vX.Y.Z` automatically (see [`docs/contract-release-automation.md`](docs/contract-release-automation.md)).
4. Merge the automated bump PRs in app repos (when `CONTRACT_CONSUMER_BUMP_TOKEN` is configured), or bump `contract/` manually to that tag.

Do not change API behavior in app repos without updating this contract in the same release train.
