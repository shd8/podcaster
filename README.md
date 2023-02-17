This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployed version

To see a deployed version to the app go to: [https://podcaster.vercel.app/](https://podcaster.vercel.app/).

## Getting Started

It is mandatory to create a .env.local file using as example the file .env.example and replace <ENDPOINT_URL> by https://itunes.apple.com

First, install all the needed packages:
```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

To run unit tests:

```bash
yarn test:ci
```

To run component tests:

```bash
yarn cypress
```

Then, navigate to Component Testing

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
