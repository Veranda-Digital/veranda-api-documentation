# Endpoint inventory

Working document reconciling **shipping mobile client**, **serverless backend** (`serverless.yml`), and **OpenAPI** (`openapi.yaml`).

Status values:

| Status | Meaning |
| ------ | ------- |
| `match` | Client, backend, and spec agree |
| `client-only` | Client calls; no backend route |
| `server-only` | Backend route; client does not call |
| `mismatch` | Path/method/auth/body disagree |
| `pending` | Not yet reviewed |

Mobile column: fill from VerandaApp `lib/api/veranda_api_calls.dart` (repo may be private).

## Backend routes (from veranda-serverless-backend `serverless.yml`)

| Method | Path | OpenAPI | Mobile | Status |
| ------ | ---- | ------- | ------ | ------ |
| POST | `/signup` | pending | pending | pending |
| POST | `/v1/admin/lock` | pending | pending | pending |
| GET | `/v1/admin/lock/{id}` | pending | pending | pending |
| DELETE | `/v1/admin/lock/{id}` | pending | pending | pending |
| GET | `/v1/admin/lock/{id}/version` | pending | pending | pending |
| GET | `/v1/profile` | pending | pending | pending |
| GET | `/v1/profile/settings` | pending | pending | pending |
| PUT | `/v1/profile/settings` | pending | pending | pending |
| GET | `/v1/profile/settings/active-lock` | pending | pending | pending |
| PUT | `/v1/profile/settings/active-lock` | pending | pending | pending |
| GET | `/v1/profile/settings/theme` | pending | pending | pending |
| PUT | `/v1/profile/settings/theme` | pending | pending | pending |
| GET | `/v1/profile/settings/device/{lock_id}` | pending | pending | pending |
| PUT | `/v1/profile/settings/device/{lock_id}` | pending | pending | pending |
| PUT | `/v1/profile/settings/global-notifications` | pending | pending | pending |
| POST | `/v1/profile/devices` | pending | pending | pending |
| DELETE | `/v1/profile/devices` | pending | pending | pending |
| GET | `/v1/profile/notifications` | pending | pending | pending |
| PUT | `/v1/profile/notifications/{id}/archive` | pending | pending | pending |
| PUT | `/v1/profile/notifications/all/archive` | pending | pending | pending |
| PUT | `/v1/profile/notifications/bulk/archive` | pending | pending | pending |
| GET | `/v1/locks/owned` | pending | pending | pending |
| GET | `/v1/locks/shared` | pending | pending | pending |
| GET | `/v1/locks/{id}` | pending | pending | pending |
| PUT | `/v1/locks/{id}` | pending | pending | pending |
| GET | `/v1/locks/{id}/version` | pending | pending | pending |
| GET | `/v1/locks/{id}/filled` | pending | pending | pending |
| GET | `/v1/locks/{id}/status` | pending | pending | pending |
| POST | `/v1/locks/{id}/update-status` | pending | pending | pending |
| POST | `/v1/locks/register/{reg_id}` | pending | pending | pending |
| DELETE | `/v1/locks/register/{reg_id}` | pending | pending | pending |
| GET | `/v1/locks/{id}/shared-users` | pending | pending | pending |
| POST | `/v1/locks/{id}/shared-users` | pending | pending | pending |
| DELETE | `/v1/locks/{id}/shared-users` | pending | pending | pending |
| DELETE | `/v1/locks/shared/{id}` | pending | pending | pending |
| GET | `/v1/locks/{id}/telemetry` | pending | pending | pending |
| GET | `/v1/locks/{id}/telemetry/series` | pending | pending | pending |
| GET | `/v1/locks/{id}/connectivity-logs` | pending | pending | pending |
| POST | `/v1/locks/{id}/unlock` | pending | pending | pending |
| POST | `/v1/locks/{id}/unlock-ble` | pending | pending | pending |
| POST | `/v1/locks/{id}/lock` | pending | pending | pending |
| GET | `/v1/locks/{id}/schedules` | pending | pending | pending |
| POST | `/v1/locks/{id}/schedules` | pending | pending | pending |
| PUT | `/v1/locks/{id}/schedules/{scheduleId}` | pending | pending | pending |
| DELETE | `/v1/locks/{id}/schedules/{scheduleId}` | pending | pending | pending |

## Legacy spec notes

`archive/openapi-legacy.yaml` used mixed path parameter names (`lock_id` vs `id`) and included order/scraping paths that are commented out in current `serverless.yml`. Resolve during OpenAPI path waves; do not copy legacy paths blindly.
