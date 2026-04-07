# No1 Shadi Backend

Mock Express backend for local development and frontend integration.

## Run

```bash
npm install
npm run dev
```

Default base URL:

```text
http://localhost:3000/api/v1
```

## Environment

Copy `.env.example` to `.env` and adjust values if needed.

```env
PORT=3000
FRONTEND_URL=http://localhost:5173
```

## Endpoints

### Health

- `GET /health`

### Auth

- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/parent-login`
- `POST /auth/admin-login`

### Profiles

- `GET /profiles`
- `GET /profiles/recommended`
- `GET /profiles/:id`

Supported profile filters:

- `city`
- `state`
- `religion`
- `caste`
- `verified=true`
- `premium=true`
- `minAge`
- `maxAge`
- `q`
- `limit`

### Subscriptions

- `GET /subscriptions/plans`
- `GET /subscriptions/current`
- `POST /subscriptions/checkout`

### Wedding Vendors

- `GET /vendors/categories`
- `GET /vendors`
- `GET /vendors/:id`
- `POST /vendors/:id/inquiries`

### Support

- `GET /support/tickets`
- `POST /support/tickets`

### Admin

- `GET /admin/dashboard`
	- Optional query param: `days` (default `7`, max `90`) for user-growth chart window
- `GET /admin/users`
- `GET /admin/verifications`