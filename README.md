## Getting Started

Run the development server:

```bash
pnpm dev
```

Open http://localhost:3000 to view the site.

## Contact Form Email Setup

The contact form now sends mail through Resend using a React Email template.

Required environment variables:

```bash
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL="Ekuphumleni <onboarding@resend.dev>"
RESEND_CONTACT_TO_EMAIL=hello@example.com
```

Notes:

- `RESEND_API_KEY` is required for the API route to authenticate with Resend.
- `RESEND_FROM_EMAIL` can use `onboarding@resend.dev` while testing, but production should use a verified sender domain.
- `RESEND_CONTACT_TO_EMAIL` is the inbox that should receive contact form submissions.

To preview emails locally with React Email:

```bash
pnpm email:dev
```
