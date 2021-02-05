import { DeepReadonly } from "ts-essentials"
import { SerializedStyles, css } from "@emotion/core"

export const ds: DeepReadonly<{
  [index: string]: (value: string) => SerializedStyles
}> = {
  padx: (value) => css({ paddingLeft: value, paddingRight: value }),
  pady: (value) => css({ paddingTop: value, paddingBottom: value }),
  marx: (value) => css({ marginLeft: value, marginRight: value }),
  mary: (value) => css({ marginTop: value, marginBottom: value }),
  transition: (value) => css({ transition: value }),
}
