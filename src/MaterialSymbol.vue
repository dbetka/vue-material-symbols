<script setup lang="ts">
import { computed } from 'vue'
import { IconsTypesProp } from '@/jscache/icons-types'
import { IconsProp } from '@/jscache/icons-names'

const DEFAULT_SIZE = 24

const props = withDefaults(
  defineProps<{
    name: IconsProp | '' | null | undefined
    type?: IconsTypesProp
    weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700'
    grade?: 'thin' | 'medium' | 'bold'
    size?: number | string
    filled?: boolean,
  }>(),
  {
    type: () => window.$materialSymbolsDefaults?.defaultType || 'outlined',
    weight: () => window.$materialSymbolsDefaults?.defaultWeight || '300',
    grade: () => window.$materialSymbolsDefaults?.defaultGrade || 'medium',
    size: () => window.$materialSymbolsDefaults?.defaultSize || DEFAULT_SIZE,
    filled: () => window.$materialSymbolsDefaults?.defaultFilled || false,
  }
)

const GRADES = {
  thin: -50,
  medium: 100,
  bold: 200,
} as const

const styles = computed(() => {
  const fill = props.filled ? '1' : '0'
  const weight = props.weight
  const grade = GRADES[props.grade]
  const size = Number.isIntefer(props.size) ? `${props.size}px` : props.size
  const opsz = Number.isIntefer(props.size) ? props.size : window.$materialSymbolsDefaults?.defaultSize || DEFAULT_SIZE,

  return [
    `font-size: ${size};`,
    `font-variation-settings: 'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz};`,
  ]
})

const classes = computed(() => {
  switch (props.type) {
    case 'outlined': return 'material-symbols-outlined'
    case 'rounded': return 'material-symbols-rounded'
    case 'sharp': return 'material-symbols-sharp'
    default: return ''
  }
})
</script>

<template>
  <i
    :class="classes"
    :style="styles"
  >
    {{ props.name }}
  </i>
</template>
