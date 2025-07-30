# apto-website

Website for APTO (Apoio Pedagógico Total), a Tutoring Center in Benfica, Lisbon.

I studied in this tutoring center for 5 years, and taught there for 1 year, and I wanted to create a new website for them to help them with their online presence.

> **Note:** The base of this repo was created by [Lovable](https://lovable.dev/), and I have made some improvements and fixes.

## Development

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Install the necessary dependencies.
npm i

# Step 2: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Stack

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

This project is automatically deployed to Cloudflare Workers using GitHub Actions, triggered by pushes to the main branch.

To manually deploy, run the following command:

```sh
npm run deploy
```
