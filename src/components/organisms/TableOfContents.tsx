import { InterpolationWithTheme } from "@emotion/core"
import React, { Fragment } from "react"
import { DeepReadonly } from "ts-essentials"
import styled from "@emotion/styled"
import { LinkText } from "../common/typography/link_text"
import { PlainComponent } from "../../utils/PlainComponent"
import { SubTitle } from "../common/typography/subtitle"

export type TOCComponentProps = DeepReadonly<{
  TOC: TOC
  className?: string
  css?: InterpolationWithTheme<any>
}>

export type TOC = DeepReadonly<{ items: TOCItems }>

export type TOCItems = {
  url: string
  title: string
  items?: TOCItems
}[]

const TOCItemComponent: React.FC<TOC> = ({ items }) => (
  <ul>
    {items.map((i) => (
      <li key={i.title} className="ml-1">
        <LinkText to={i.url}>{i.title}</LinkText>
        {i.items ? <TOCItemComponent items={i.items} /> : null}
      </li>
    ))}
  </ul>
)

export const Plain: PlainComponent<TOCComponentProps> = ({
  className,
  TOC,
}) => (
  <nav className={className}>
    <SubTitle>Table of Contents</SubTitle>
    <TOCItemComponent items={TOC.items} />
  </nav>
)

export const Styled = styled(Plain)`
  background-color: rgba(220, 220, 220, 0.3);
  border-radius: 0.25rem;
  padding: 16px;
`

export { Styled as TableOfContents }
