# Mobile client contract

Audience: agents and engineers on **VerandaApp**.

## Client API layer

| File | Role |
| ---- | ---- |
| `lib/api/veranda_api_client.dart` | HTTP client, auth headers, envelope parsing |
| `lib/api/veranda_api_calls.dart` | Path/method definitions for shipping client |
| `lib/models/*` | Request/response models |

Reconcile any drift with [endpoint-inventory.md](endpoint-inventory.md) before changing OpenAPI.

## Auth

Cognito access token on `Authorization: Bearer`. Token refresh and session handling live in the Flutter app (document in ENVIRONMENTS / auth modules when expanded).

## WebSocket

See [websocket.md](websocket.md).

## Submodule

Pin `contract/` to a `contract-vX.Y.Z` tag from this repo after contract PRs merge.
