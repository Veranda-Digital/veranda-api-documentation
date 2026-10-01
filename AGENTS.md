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
2. Merge, then tag `contract-vX.Y.Z` on this repo.
3. Bump the `contract/` submodule pointer in **VerandaApp** and/or **veranda-serverless-backend** to that tag.

Do not change API behavior in app repos without updating this contract in the same release train.
