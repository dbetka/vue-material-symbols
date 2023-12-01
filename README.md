# vue-material-symbols
> Vue3 material design symbols component with typed props like name and symbol type. We provide easy customization by CSS styles.

[![npm version](https://badge.fury.io/js/%40dbetka%2Fvue-material-symbols.svg)](https://badge.fury.io/js/%40dbetka%2Fvue-material-symbols)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Fonts based on https://fonts.google.com/icons.

- [How to start](#how-to-start)
  - [Installation](#installation)
  - [Setup in project](#setup-in-project)
- [Usage](#usage)
  - [Base examples](#base-examples)
  - [Usage in Composition API](#usage-in-composition-api)
- [Own styles](#own-styles)
  - [Set icon color](#set-icon-color)
  - [Set icon size by style](#set-icon-size-by-style)

## How to start

### Installation
```bash
npm install -D @dbetka/vue-material-symbols
```

### Setup in project

Add as Vue3 plugin:
```js
import '@dbetka/vue-material-symbols/dist/index.css'
import materialIcons from '@dbetka/vue-material-symbols';

const app = createApp(App);
app.use(materialIcons);
```

### Setup in project with configuration

```js
import '@dbetka/vue-material-symbols/dist/index.css'
import materialIcons from '@dbetka/vue-material-symbols';

const app = createApp(App);
app.use(materialIcons, {
  defaultWeight: '100',
  defaultGrade: 'thin',
  defaultSize: 24,
  defaultType: 'outlined',
});
```


## Usage

### Base examples
```vue
<template>
  <div>
    <material-symbol name="delete" />
    <material-symbol name="delete" filled/>
    <material-symbol name="delete" outlined/>
    <material-symbol name="delete" round/>
    <material-symbol name="delete" sharp/>
    <material-symbol name="delete" two-tone/>
    <material-symbol name="delete" size="26"/>
  </div>
</template>
```

### Usage in Composition API
```vue
<template>
  <div>
    <symbol :name="iconName" />
  </div>
</template>

<script>
import { useIcons } from '@dbetka/vue-material-symbols';

export default {
  props: {
    done: Boolean,
  },
  setup(props) {
    const icons = useIcons()
    
    const iconName = computed(() => props.done ? icons.names.done : icons.names.hourglass_empty)
    
    return {
      iconName
    }
  }
};
</script>
```

## Own styles

### Set icon color

Component with CSS example:
```vue
<template>
  <div>
    <material-symbol name="delete" class="red"/>
  </div>
</template>

<style>
.red {
   color: red;
}
</style>
```

