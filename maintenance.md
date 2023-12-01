# vue-material-icons (maintenance)
> Vue2 material design icons with easy access to icons names and types (all available in IDE hints).
Hints were tested on IntelliJ IDE. Fonts based on https://fonts.google.com/icons.

- [How to start](#how-to-start)
  - [Get repository](#get-repository)
  - [Setup in project](#installation)
  - [Scripts descriptions](#scripts-descriptions)
  - [Builders](#builders)
  - [Code quality tools](#code-quality-tools)

## How to start

### Get repository
```bash
git clone https://github.com/dbetka/vue-material-icons.git
```

### Installation
```bash
npm i
sudo npm install -g @microsoft/api-extractor
```

### Scripts descriptions

| Script                   | Description                                                    |
|:-------------------------|:---------------------------------------------------------------|
| `npm run download-icons` | Download list of icons and its types - save all it into files. |
| `npm run dev`                    | Run project demo on localhost.                                 |
| `npm run build`                  | Build dist packages (`index.js`, `local.js`).                  |
| `npm run download-and-build`     | Run `download-icons` and `build` one-by-one.                   |

### Builders
Project use 2 js builders: 
- `Bili` to build dist packages.
- `Webpack` to run demo.

### Code quality tools
Project use ESLint. Before coding configure your environment to use ESLint configuration.
