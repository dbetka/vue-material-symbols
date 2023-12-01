<script setup lang="ts">
import { computed } from 'vue'
import { IconsTypesProp } from '@/jscache/icons-types'
import { IconsProp } from '@/jscache/icons-names'
import { useIcons } from '@/index'
import { materialSymbolsDefaults } from '@/propsDefaults'

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
    type: () => materialSymbolsDefaults.defaultType || 'outlined',
    weight: () => materialSymbolsDefaults.defaultWeight || '300',
    grade: () => materialSymbolsDefaults.defaultGrade || 'medium',
    size: () => materialSymbolsDefaults.defaultSize || 24,
  }
)

const icons = useIcons()

const GRADES = {
  thin: -50,
  medium: 100,
  bold: 200,
} as const

const styles = computed(() => {
  const fill = props.filled ? '1' : '0'
  const weight = props.weight
  const grade = GRADES[props.grade]
  const size = props.size

  return [
    `font-size: ${size}px;`,
    `font-variation-settings: 'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${size};`,
  ]
})

const classes = computed(() => {
  console.log(props.type, icons.types.outlined)
  switch (props.type) {
    case icons.types.outlined: return 'material-symbols-outlined'
    case icons.types.rounded: return 'material-symbols-rounded'
    case icons.types.sharp: return 'material-symbols-sharp'
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
