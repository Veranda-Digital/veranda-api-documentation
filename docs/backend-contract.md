# Backend contract

Audience: agents and engineers on **veranda-serverless-backend**.

## Implementation map

| Concern | Location |
| ------- | -------- |
| HTTP routes | `serverless.yml` `http` events |
| Handlers | `api/` (e.g. `api/client/*`) |
| Response envelope | `helper_functions/response_header.js` → `{ data, metadata }` |
| Pagination totals | `helper_functions/pagination_metadata.js` |

## Auth

- Client routes: API Gateway **Cognito user pool** authorizer (`Authorization: Bearer <access JWT>`).
- Admin routes: API key / separate auth as defined in OpenAPI.
- Lock access: roles `owner` and `shared` (see handlers under `api/client/lock_roles.js`).

## Side effects

Document in OpenAPI operation descriptions as they are added: LoRa/IoT unlock, FCM push, WebSocket notify Lambdas, schedule materialization, etc.

## Deploy

Serverless Framework (`serverless.yml`) defines Lambdas and API Gateway REST routes for the stage. Contract changes merge here before bumping `contract/` in this repo.

See also [shared-envelope.md](shared-envelope.md) and [endpoint-inventory.md](endpoint-inventory.md).
