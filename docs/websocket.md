# WebSocket API

Real-time lock status and related events use API Gateway WebSocket routes, not REST paths in `openapi.yaml`.

**Source of truth for client behavior:** VerandaApp `lib/api/veranda_websocket_client.dart` (see [repositories.md](repositories.md)).

This document will be expanded with connection URL, auth, subscribe/unsubscribe messages, and payload shapes. Until then, implement and test against the shipping Flutter client.
