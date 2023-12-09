# vue-material-symbols
> Vue3 material design symbols fully typed component. Works well with TypeScript and JavaScript. We provide easy customization by CSS classes.

[![npm version](https://badge.fury.io/js/%40dbetka%2Fvue-material-symbols.svg)](https://badge.fury.io/js/%40dbetka%2Fvue-material-symbols)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Fonts based on https://fonts.google.com/icons.

## Demo

[Demo](https://dbetka.github.io/vue-material-symbols/)

## How to start

### Installation
```bash
npm install -D @dbetka/vue-material-symbols
```

### Setup in project with default configuration

Add as Vue3 plugin:
```js
import materialIcons from '@dbetka/vue-material-symbols';
import 'material-symbols/index.css';

const app = createApp(App);
app.use(materialIcons);
// defaultType: 'outlined',
// defaultWeight: '300',
// defaultGrade:  'medium',
// defaultSize: 24,
// defaultFilled: false,
```

### Setup in project with configuration

```js
import materialIcons from '@dbetka/vue-material-symbols';
import 'material-symbols/index.css';

const app = createApp(App);
app.use(materialIcons, {
  defaultWeight: '100',
  defaultGrade: 'thin',
  defaultSize: 24,
  defaultType: 'outlined',
  defaultFilled: false,
});
```


## Usage

### Base examples
```vue
<script setup>
  import { MaterialSymbol } from '@dbetka/vue-material-symbols';
</script>
<template>
  <div>
    <MaterialSymbol name="delete" />
    <MaterialSymbol name="delete" filled />
    <MaterialSymbol name="delete" type="outlined" />
    <MaterialSymbol name="delete" type="rounded" />
    <MaterialSymbol name="delete" type="sharp" />
    <MaterialSymbol name="delete" size="26" />
  </div>
</template>
```

### Usage in Composition API
```vue
<script setup lang="ts">
  import { MaterialSymbol, SymbolsProp } from '@dbetka/vue-material-symbols';
  import { computed } from 'vue';

  const props = defineProps({
    done: Boolean,
  });

  const symbolName = computed<SymbolsProp>(() => props.done ? 'done' : 'hourglass_empty')
</script>
<template>
  <div>
    <MaterialSymbol :name="symbolName" />
  </div>
</template>
```
Or without TypeScript:
```vue
<script setup>
  import { useSymbols, MaterialSymbol } from '@dbetka/vue-material-symbols';
  import { computed } from 'vue';

  const props = defineProps({
    done: Boolean,
  });

  const symbols = useSymbols()
  const symbolName = computed(() => props.done ? symbols.names.done : symbols.names.hourglass_empty)
</script>
<template>
  <div>
    <MaterialSymbol :name="symbolName" />
  </div>
</template>
```

## Own styles

### Set icon color

Component with CSS example:
```vue
<script setup>
  import { MaterialSymbol } from '@dbetka/vue-material-symbols';
</script>
<template>
  <div>
    <MaterialSymbol name="delete" class="red"/>
  </div>
</template>

<style>
.red {
   color: red;
}
</style>
```

