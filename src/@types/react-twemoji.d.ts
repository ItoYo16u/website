declare module "react-twemoji" {
  import React from "react"
  import { ParseObject } from "twemoji"

  export default class Twemoji extends React.Component<TwemojiProps, any> {}

  type TwemojiProps =
    | {
        noWrapper: true
        options?: TwemojiOptions
        children: React.ReactNode
      }
    | {
        noWrapper?: false
        options?: Partial<TwemojiOptions>
        tag?: string
        children: React.ReactNode
      }
  type TwemojiOptions = ParseObject
}
