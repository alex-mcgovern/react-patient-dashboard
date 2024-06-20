
# Pokedex React App

A quick Pokedex app for a take-home assignment.


## Demo

It's deployed with Cloudflare pages at [react-pokedex.alexmcgovern.com](https://react-pokedex.alexmcgovern.com/)


## Features

- Built with [Vite](https://vitejs.dev/)
- [PokeAPI](https://pokeapi.co/) to source data
- Uses [openapi-zod-client](https://www.npmjs.com/package/openapi-zod-client) to build a type-safe API client from PokeAPI OpenAPI definition
- Built with a feature-complete component library, [Boondoggle](https://boondoggle.design/)
- Monorepo architecture, using NPM workspaces (no deps) for module privacy 
- Sentry error boundary — drop in a DSN to enable error tracking
- Strict static analysis config
- Example of unit testing (in-source testing with Vitest)
- Example of E2E tesing with Cypress
- Build-test-deploy workflow with Github Actions

## Useful scripts

- `npm run dev` — Start the dev server
- `npm run build && npm run preview` — Do a prod build and serve it
- `npm run check` — Run static analysis checks & unit tests: `eslint`, `prettier`, `tsc`, `vitest` and [`knip`](https://knip.dev/)
- `npm run fix` — Fix any auto-fixable static analysis issues
- `npm run cy:run` — Run E2E tests
- `npm run gen` — Fetch the PokeAPI OpenAPI spec from their Github repo and re-generate the Zod schemas, types and API client

## Run Locally

> [!IMPORTANT]  
> Font Awesome Pro is a dependency of the component libray, which requires an API token.
> 
> It's assumed that this is available to the reviewer, but if necessary can be shared securely — just reach out and ask.

<details>
<summary>Authenticating Font Awesome</strong></summary>
<br />
In order to install FontAwesome icon library, you will to export a `FONTAWESOME_TOKEN`
global environment variable on your machine.

Once you've obtained this token, (assuming you're using `zsh`, the default shell on Mac
OS) you can export it like so:

1. Open your `.zshrc` for editing using your preferred method, e.g. by running:

    ```shell
    open ~/.zshrc
    ```

2. Add this line: (substituting in your token)

    ```shell
    export FONTAWESOME_TOKEN={TOKEN}
    ```

3. once saved, you can source your updated `.zshrc` by running:

    ```shell
    source ~/.zshrc
    ```

---

_Then proceed with installation..._

</details>

Clone the project

```bash
  git clone git@github.com:alex-mcgovern/react-pokedex.git
```

Go to the project directory

```bash
  cd react-pokedex
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```

Or do a prod build

```bash
  npm run build && npm run preview
```

## What would I have done if I had more time?

- [x] Build a Pokemon detail view, probably with a modal or drawer (I found time)
- [ ] Add filtering to the table view
- [ ] Round out styling — particularly on smaller screens, and add a mobile menu
