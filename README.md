# CLI Assist

A terminal coding assistant powered by OpenRouter.

## Prerequisites

- Node.js 18+
- npm
- An OpenRouter API key

## Setup

```bash
npm install
cp .env.example .env
```

Set your key in `.env`:

```bash
OPENROUTER_API_KEY=your_key_here
```

You can also export it instead of using `.env`:

```bash
export OPENROUTER_API_KEY=your_key_here
```

## Build

```bash
npm run build
```

## Use Globally (npm link)

From this repo:

```bash
npm link
```

Then run from anywhere:

```bash
assist --model openai/gpt-4o-mini
```

To remove the global link later:

```bash
npm unlink -g assistance
```
