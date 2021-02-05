import { FC } from "react"

export type PlainComponent<T extends object> = FC<{ className?: string } & T>
