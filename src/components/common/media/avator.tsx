import * as React from "react"
import styled from "@emotion/styled"
import { AnyImage } from "./anyImage"
import { css } from "@emotion/core"

interface IPassedProps {
  path: string
  alt?: string
}

interface IProps extends IPassedProps {
  className?: string
}

const Component: React.FC<IProps> = (props) => {
  const { path, className } = props

  return (
    <div className={className}>
      <AnyImage className={"avator"} filename={path} alt={props.alt} />
    </div>
  )
}

const StyledComponent = styled(Component)`
  & .avator {
    margin: 0 auto;
    min-width: 50px;
    min-height: 50px;
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
    border: solid 1px #ccc;
  }
`

export const Avator = StyledComponent
