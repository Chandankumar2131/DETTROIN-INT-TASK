# Vasant Valley School Redesign

A modern MERN-stack redesign created for the Dettroin Full Stack Developer Internship assessment.

## Architecture

```text
.
├── client/
│   ├── public/
│   └── src/
│       ├── app/          # Router and application composition
│       ├── assets/       # Local media assets
│       ├── components/   # Reusable layout, navigation and UI
│       ├── data/         # Static presentation data
│       ├── pages/        # Route-level page components
│       ├── services/     # Backend API client
│       └── styles/       # Global and site styles
└── server/
    └── src/
        ├── config/       # Environment and MongoDB configuration
        ├── controllers/  # HTTP request handlers
        ├── data/         # Development content
        ├── middleware/   # Error and request middleware
        ├── routes/       # Express route definitions
        └── services/     # Business logic
```

## Run locally

1. Copy `client/.env.example` and `server/.env.example` to `.env` files.
2. Run `npm install`.
3. Run `npm run dev`.

The React client runs on port 5173 and the Express API on port 5000.

## Available routes

- `/`
- `/vision-philosophy/`
- `/learning-experience/`

## API endpoints

- `GET /api/health`
- `GET /api/school`
- `GET /api/navigation`
- `GET /api/news`
- `POST /api/enquiries`
