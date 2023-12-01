import './index.sass'
import MaterialIcon from './material-icon.vue'
import { App } from 'vue'
import { icons, Icons } from './jscache/icons-names'
import { iconsTypes, IconsTypes, IconsTypesProp } from './jscache/icons-types'
export type { Icons } from './jscache/icons-names'
export type { IconsTypes } from './jscache/icons-types'

export declare interface MaterialIcons {
  readonly names: Icons;
  readonly types: IconsTypes;
}

export declare interface ConstructorOptions {
  defaultFilled?: boolean
  defaultWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700'
  defaultGrade?: 'thin' | 'medium' | 'bold'
  defaultSize?: number | string
  defaultType?: IconsTypesProp
}

declare global {
  interface Window { $materialIconsDefaults: ConstructorOptions; }
}

const materialIcons: MaterialIcons = {
  names: icons as Icons,
  types: iconsTypes as IconsTypes,
}

function useIcons (): MaterialIcons {
  return materialIcons as MaterialIcons
}
export default {
  MaterialIcon,
  useIcons,
  materialIcons,
  install: (app: App, options: ConstructorOptions) => {
    window.$materialIconsDefaults = options
    app.component('MaterialIcon', MaterialIcon)
  }
}

export {
  MaterialIcon,
  useIcons,
  materialIcons,
}
