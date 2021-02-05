import React from "react"
import styled from "@emotion/styled"
import { Stylable } from "../../../utils/Components"

type IPassedProps = Stylable & {
  children: string
  className?: string
}

const Component: React.FC<IPassedProps> = ({ css, children, className }) => (
  <div css={css} className={className}>
    {children}
  </div>
)

const StyledComponent = styled(Component)`
  font-size: 20px;
  padding: 4px 0px;
  color: #2c2e31;
`

export const SubTitle = StyledComponent
