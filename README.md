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
import '@dbetka/vue-material-icons/dist/index.css'
import materialIcons from '@dbetka/vue-material-icons';

const app = createApp(App);
app.use(materialIcons);
```

## Usage

### Base examples
```vue
<template>
  <div>
    <material-icon name="delete" />
    <material-icon name="delete" filled/>
    <material-icon name="delete" outlined/>
    <material-icon name="delete" round/>
    <material-icon name="delete" sharp/>
    <material-icon name="delete" two-tone/>
    <material-icon name="delete" size="26"/>
  </div>
</template>

<script>
export default {
  name: 'some-component',
};
</script>
```

### Usage in Composition API
```vue
<template>
  <div>
    <material-icon :name="elIcon" />
  </div>
</template>

<script>
import { useIcons } from '@dbetka/vue-material-icons';

export default {
  name: 'some-component',
  props: {
    done: Boolean,
  },
  setup(props) {
    const icons = useIcons()
    
    const elIcon = computed(() => props.done ? icons.names.done : icons.names.hourglass_empty)
    
    return {
      elIcon
    }
  }
};
</script>
```

## Own styles
Icon component CSS class is `material-icon`. You can modify this class styles by new CSS styles.

### Set icon color

Component with CSS example:
```vue
<template>
  <div>
    <material-icon name="delete" class="red"/>
  </div>
</template>

<script>
export default {
  name: 'some-page',
};
</script>

<style>
.material-icon.red {
   color: red;
}
</style>
```

### Set icon size by style

Component with CSS example:
```vue
<template>
  <div>
    <material-icon name="delete" class="bigger"/>
  </div>
</template>

<script>
export default {
  name: 'some-page',
};
</script>

<style>
.material-icon.bigger {
   font-size: 64px;
   width: 64px;
   height: 64px;
}
</style>
```

SASS example:
```sass
// mixins.sass
=icon-size($size)
   font-size: $size
   width: $size
   height: $size

// icons.sass
.material-icon.bigger 
  +icon-size(64px)
```
