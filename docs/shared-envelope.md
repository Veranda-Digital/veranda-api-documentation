# Shared response envelope

Successful JSON responses from the serverless API use a single envelope:

```json
{
  "data": {},
  "metadata": {}
}
```

- **`data`**: payload (object, array, string, or primitive depending on the operation).
- **`metadata`**: pagination flags, totals, or operation-specific hints.

Errors may return non-envelope bodies depending on status code; document per operation in OpenAPI.

## Pagination

List endpoints that support paging set `metadata.pagination` and, when applicable:

| Field | Meaning |
| ----- | ------- |
| `currentPage` | 1-based page index |
| `perPage` | page size |
| `total` | total row count |
| `totalPages` | derived page count |

Common query parameters: `page`, `limit`, `from`, `to` (see `openapi.yaml` component parameters).
