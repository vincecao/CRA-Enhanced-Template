# Create React App - Enhanced Template

For Typescript version, please check [CRA-Enhanced-Template-typescript](https://github.com/vincecao/CRA-Enhanced-Template-typescript)

## Live Demo

[Demo Template](https://vincecao.github.io/CRA-Enhanced-Template/)

_(currently host on branch `demo` with Github Action)_

## Description

This template add following features:

* style with `tailwindcss-v2`, `postcss-8` & `autoprefixer-10`
* `jest`, `eslint` & `react-app-rewired` fitting same alias configs for importing path from root
* `prettier`, `husky` & `lint-staged` for formatting with commit hook

## Development

``` bash
yarn

# Development, tailwindcss purge -> enabled: false, size ~ Size: 3.9MB
yarn start

# Production, tailwindcss purge -> enabled: true, size ~ Size: 13.04KB
yarn build

yarn test
```

# License

MIT
