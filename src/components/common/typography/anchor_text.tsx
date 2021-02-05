import React from "react"
import styled from "@emotion/styled"
import { Linkable } from "../../../utils/Components"
import { Link } from "gatsby"
import {  textColor } from "../../../styles"

type IPassedProps = Linkable & {
  children: string
  className?: string
}

const Component: React.FC<IPassedProps> = ({ to, children, className }) => (
  <Link to={to}>
    <div className={className}>{children}</div>
  </Link>
)

const StyledComponent = styled(Component)`
  font-size: 18px;
  padding: 4px 2px;
  color: ${textColor.Dark};
  transition: opacity 0.4s ease;
  & :hover {
    opacity: 0.7;
  }
`

export const AnchorText = StyledComponent
