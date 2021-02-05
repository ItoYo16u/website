import { InterpolationWithTheme } from "@emotion/core"

export interface Stylable {
  className?: string
  css?: InterpolationWithTheme<any>
}

export interface WithClassName {
  className?: string
}

export interface Linkable {
  to: string
}
