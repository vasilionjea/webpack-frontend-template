# About
A starter template for Frontend JavaScript projects using the following technologies:

#### Typescript
Webpack's `ts-loader` uses `tsc`, the TypeScript compiler, and relies on your `tsconfig.json` configuration, to compile _.ts_ files to **es2017** JavaScript. ECMAScript 2017 (_ES2017 or ES8_) of the ECMA-262 Standard was finalized in June 2017. 

ES2017 was a tiny release compared to ES6 (_ES2015_) and introduced `async/await`, `Object.values()`, `Object.entries()` among a few other featuers, hence these features will not be transpiled. Change the `target` option in the `tsconfig.json` file to a lower version of JavaScript if you won't to support old Browser versions.

#### Sass
Transforms Sass to CSS.

#### ESLint & Prettier
ESLint relies on your `.eslintrc.cjs` config to lint _.ts_ files, and uses the recommended rules. Prettier formats your code and relies on its defaults and the `.prettierrc` file.

## Development 
* Run `npm run start` to start the Webpack development server with live reload. Also opens your Browser and points it to http://localhost:3000
* Run `npm run lint` to lint your code with ESLint.
* Run `npm run format` to format your code with Prettier.

## Production
1. Run `npm run build` to build project.
2. Then deploy the generated `dist/` directory.

## Resources 
#### Webpack
* https://webpack.js.org/guides/getting-started
* https://webpack.js.org/configuration
* https://webpack.js.org/guides/typescript
* https://webpack.js.org/guides/typescript/#using-third-party-libraries

#### Typescript 
* https://www.typescriptlang.org/
* https://www.typescriptlang.org/tsconfig

#### ESLint
* https://typescript-eslint.io/getting-started
* https://eslint.org/docs/latest/user-guide/configuring/configuration-files
* https://eslint.org/docs/latest/user-guide/configuring/rules#rules-from-plugins
* https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* https://blog.logrocket.com/linting-typescript-using-eslint-and-prettier

#### Prettier
* https://prettier.io/docs/en/index.html
* https://prettier.io/docs/en/options.html
* https://blog.logrocket.com/linting-typescript-using-eslint-and-prettier

