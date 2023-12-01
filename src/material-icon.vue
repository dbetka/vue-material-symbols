<script setup lang="ts">
import { computed } from 'vue'
import { IconsTypesProp } from '@/jscache/icons-types'
import { IconsProp } from '@/jscache/icons-names'
import { useIcons } from '@/index'

const props = withDefaults(
  defineProps<{
    type?: IconsTypesProp
    name: IconsProp | '' | null | undefined
    weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700'
    grade?: 'thin' | 'medium' | 'semibold' | 'bold'
    size?: number | string
    filled?: boolean,
    outlined?: boolean,
    round?: boolean,
    sharp?: boolean,
  }>(),
  {
    type: 'filled',
    weight: '300',
    grade: 'thin',
    size: 24,
  }
)

const icons = useIcons()

const GRADES = {
  thin: -50,
  medium: 0,
  semibold: 100,
  bold: 200,
} as const

const styles = computed(() => {
  const fill = props.type === 'filled' ? '1' : '0'
  const weight = props.weight
  const grade = GRADES[props.grade]
  const size = props.size

  return [
    `font-size: ${size}px;`,
    `font-variation-settings: 'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${size};`,
  ]
})

const typeClassFromType = computed(() => {
  switch (props.type) {
    case icons.types.filled: return 'material-icon-filled'
    case icons.types.outlined: return 'material-icon-outlined'
    case icons.types.round: return 'material-icon-round'
    case icons.types.sharp: return 'material-icon-sharp'
    default: return ''
  }
})
const typeClassFromParams = computed(() => {
  if (props.filled) return 'material-icon-filled'
  if (props.outlined) return 'material-icon-outlined'
  if (props.round) return 'material-icon-round'
  if (props.sharp) return 'material-icon-sharp'
  else return ''
})

const classes = computed(() => ([
  typeClassFromType.value,
  typeClassFromParams.value,
]))
</script>

<template>
  <i
    class="material-icon"
    :class="classes"
    :style="styles"
  >
    {{ props.name }}
  </i>
</template>
