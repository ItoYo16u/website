import React from "react"
import styled from "@emotion/styled"
import { Stylable } from "../../../utils/Components"

type IPassedProps = Stylable & {
  children: string
  className?: string
}

const Component: React.FC<IPassedProps> = ({ css, children, className }) => (
  <div css={css} className={className}>
    #{children}
  </div>
)

const StyledComponent = styled(Component)`
  display: inline-block;
  border: solid 1px #cccccc;
  padding: 6px 20px;
  border-radius: 24px;
  background-color: transparnet;
  color: #2c2e31;
  font-size: 16px;

  :hover {
    background-color: #f5f5f5;
  }
`

export const Tag = StyledComponent
