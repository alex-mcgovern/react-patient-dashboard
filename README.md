
# React Patient Dashboard

A quick Patient Dashboard app for a take-home assignment.


## Demo

It's deployed with Cloudflare pages at [patient-dashboard.alexmcgovern.com](https://patient-dashboard.alexmcgovern.com/)


## Features

- Built with [Vite](https://vitejs.dev/)
- Uses [Redux Toolkit](https://redux-toolkit.js.org/) for statement management
- Uses [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for data fetching & caching
- Built with a feature-complete component library which is a side project of mine, [Boondoggle](https://boondoggle.design/)
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
  git clone git@github.com:alex-mcgovern/react-patient-dashboard.git
```

Go to the project directory

```bash
  cd react-patient-dashboard
```

Install dependencies

```bash
  npm i
```

Copy the example `.env` file

```bash
  cp .env.example .env
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

- [ ] Add filtering (by specific columns) to the table view
- [ ] Round out styling — particularly on smaller screens
