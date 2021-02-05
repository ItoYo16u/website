import { Stylable } from "../../utils/Components"
import React from "react"

/**
 * Centerd empty container.
 * @param props
 */
export const Container: React.FC<Stylable> = (props) => (
  <main
    className={
      "container mx-auto overflow-hidden selection-green " +
      (props.className ?? "")
    }
    children={props.children}
    css={props.css}
  />
)
