# oma-frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).


# TODO

- WHERE YOU WERE
- Try to debug why I get a crash when doing preview but not in dev
- if the approach from below works write a TIL
- https://stackoverflow.com/questions/72017405/typeerror-cant-convert-undefined-to-object-only-after-vite-build-before-wi

- `this` in binding expressions causes errors
  - https://rollupjs.org/guide/en/#error-this-is-undefined
  - 



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development and spin up local mocks

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


### Spin up local mocks

```sh
json-server --watch mocks/db.json --routes mocks/routes.json
```


