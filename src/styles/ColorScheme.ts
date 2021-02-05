import { DeepReadonly } from "ts-essentials"

type colors =
  | "primaryAccent"
  | "background"
  | "cardBackground"
  | "text"
  | "border"
  | "secondaryAccent"

export const cs: DeepReadonly<
  {
    [index in colors]: string
  }
> = {
  background: "#eeeef1",
  cardBackground: "#FFFFFF",
  primaryAccent: "#2196f3",
  secondaryAccent: "#f6e05e",
  text: "#5f5d51",
  border: "#404040",
}

type Ink =
  | "Darker"
  | "Dark"
  | "Plain"
  | "Light"
  | "Pale"

export const textColor: DeepReadonly<{
    [index in Ink]: string
}> = {
  "Darker": "#404040",
  "Dark": "#484242",
  "Light": "#999999",
  "Plain":"#888888",
  "Pale":"#BBBBBB"
  }