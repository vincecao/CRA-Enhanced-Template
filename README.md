# Create React App - Enhanced Template

## Live Demo

[Demo Template](https://vincecao.github.io/Create-React-App-Enhanced-Template/)

_(currently host on branch `demo` with Github Action)_

## Description

This template add following features:

- style with `tailwindcss-v2`, `postcss-8` & `autoprefixer-10`
- `jest`, `eslint` & `react-app-rewired` fitting same alias configs for importing path from root
- `prettier`, `husky` & `lint-staged` for formatting with commit hook

## Development

```bash
yarn

yarn start
# Comment out `purge -> enabled: true` in `.tailwind.config.js` for preventing purgeCSS starts in development.

yarn build

yarn test
```

# License

MIT
