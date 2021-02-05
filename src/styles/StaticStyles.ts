import { DeepReadonly } from "ts-essentials"
import { SerializedStyles, css } from "@emotion/core"
import { cs, mq } from "./index"
import { ds } from "."

type stylekeys =
  | "background"
  | "border"
  | "text"
  | "textShadow"
  | "letterSpacing"
  | "rounded"
  | "hidden"
  | "container"
  | "centered"
  | "transition"
  | "boxShadowMedium"

export const ss: DeepReadonly<{ [index in stylekeys]: SerializedStyles }> = {
  background: css`
    background-color: ${cs.background};
  `,
  border: css`
    border: none solid ${cs.border};
  `,
  text: css`
    color: ${cs.text};
  `,
  textShadow: css`
    text-shadow: #0008 2px 2px 3px;
  `,
  boxShadowMedium: css`
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  `,
  hidden: css`
    overflow: hidden;
  `,
  letterSpacing: css`
    letter-spacing: 0.02em;
  `,
  rounded: css`
    border-radius: 0.5rem;
  `,
  container: css`
    width: 100%;
    ${mq[0]} {
      max-width: 640px;
    }
    ${mq[1]} {
      max-width: 768px;
    }
    ${mq[2]} {
      max-width: 1024px;
    }
  `,
  centered: css`
    ${ds.marx("auto")}
  `,
  transition: css`
    transition: 150ms all ease-in;
  `,
}
