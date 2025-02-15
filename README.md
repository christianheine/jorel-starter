<p align="center">
  <img src="https://github.com/christianheine/jorel/raw/master/assets/logo.svg" width="140px" alt="JorEl logo" />
</p>

# JorEl Starter

This is a quickstart repository for [JorEl]([https://github.com/christianheine/jorel), a powerful TypeScript library that provides a unified interface for working with multiple Large Language Models (LLMs). It simplifies complex LLM interactions like tool calling, image processing, and agent workflows while maintaining full flexibility.

The full documentation is available at [https://christianheine.github.io/jorel/](https://christianheine.github.io/jorel/).

## How to get started

### Clone the repository

1. Clone this repository
2. Run `npm install` or `yarn install`
3. Rename the .env.example file to .env and add your API keys
4. Start editing the `src/index.ts` file
5. Run `npm start` or `yarn start` to run it

### Degit

You can also use [degit](https://github.com/Rich-Harris/degit) to quickly get started.

```bash
npx degit christianheine/jorel-starter my-jorel-project
cd my-jorel-project
npm install
```

## What is included in the starter?

* TypeScript configuration: Pre-configured TypeScript setup, including ts-node for running TypeScript files directly
* ESLint and Prettier: Linting and formatting setup for consistent code style
* dotenv: Load environment variables from a .env file
* zod: Type-safe schema validation for LLM tool-use
* .env.example: Example .env file with placeholders for API keys
* .gitignore: Pre-configured .gitignore file
* Example code: A simple example that uses JorEl to generate a response for a text prompt

## License

MIT
