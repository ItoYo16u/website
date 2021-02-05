import React from "react"
import styled from "@emotion/styled"
import { Stylable } from "../../../utils/Components"

interface IPassedProps {
  className?: string
}

const Component: React.FC<IPassedProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
)

const StyledComponent = styled(Component)`
  font-size: 14px;
  color: #2c2e31;
  margin-top: 2px;
  margin-bottom: 2px;
`

export const Caption = StyledComponent
