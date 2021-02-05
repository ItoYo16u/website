import { css } from "@emotion/core"
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { DeepReadonly } from "ts-essentials"
import { textColor } from "../../styles"
import { Post } from "../../utils/Post"
library.add(faChevronLeft,faChevronRight)
type adjoining = Pick<Post, "path" | "title"> | null | undefined

export type PrevNextLinkProps = DeepReadonly<{
  previous: adjoining
  next: adjoining
}>

export const PrevNextLink: React.FC<PrevNextLinkProps> = ({
  previous,
  next,
}) => (
  <div className={`flex justify-between`} css={{}}>
    {previous != undefined ? (
      <PrevNextLinkButton enabled to={previous.path ?? "path-not-found"}>
        {previous.title}
      </PrevNextLinkButton>
    ) : (
      <PrevNextLinkButton enabled={false}>No Article Found</PrevNextLinkButton>
    )}

    {next != null && next != undefined ? (
      <PrevNextLinkButton enabled to={next.path ?? "/"}>
        {next.title}
      </PrevNextLinkButton>
    ) : (
      <PrevNextLinkButton enabled={false}>No Article Found</PrevNextLinkButton>
    )}
  </div>
)

export default PrevNextLink

type PrevNextLinkButtonProps =
  | { enabled: true; to: string }
  | { enabled: false }

export const PrevNextLinkButton: React.FC<PrevNextLinkButtonProps> = (
  props
) => {
  return (
    <div
      css={css`
        width: 50%;
        color: ${props.enabled ? `${textColor.Plain}`: `${textColor.Pale}`};
        transition: all 0.2s ease-in;
        :hover {
          ${props.enabled ? `opacity: 0.5;
          color: #FFF;
          background-color: rgba(90,90,90,0.5);`:""}
        }
        &:nth-of-type(odd) * div {
          svg.rightChevron {
            display: none;
          }
        }
        &:nth-of-type(even) * div {
          text-align: right;
          svg.leftChevron {
            display: none;
          }
        }
      `}
    >
      <LinkOrSpan {...props}>
        <PrevNextLinkButtonChildren>
          {props.children}
        </PrevNextLinkButtonChildren>
      </LinkOrSpan>
    </div>
  )
}

const LinkOrSpan: React.FC<PrevNextLinkButtonProps> = (props) => {
  return props.enabled ? (
    <Link aria-label={`link to ${props.to}`} className="block py-2 px-3" to={`/${props.to}/`}>
      {props.children}
    </Link>
  ) : (
    <span className="block py-2 px-3">{props.children}</span>
  )
}

const PrevNextLinkButtonChildren: React.FC<{}> = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={faChevronLeft} className="leftChevron mr-1" />
      <span>{props.children}</span>
      <FontAwesomeIcon icon={faChevronRight} className="rightChevron ml-1" />
    </div>
  )
}
