import { css } from "@emotion/core"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { DeepReadonly } from "ts-essentials"
import { Post } from "../../utils/Post"

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
      className={`transition w-1/2 backdrop-blur text-90 ${
        props.enabled
          ? "bg-grey-900 hover:bg-blue-800  hover:text-gray-300"
          : "text-gray-400"
      }`}
      css={css`
        &:nth-of-type(odd) * div {
          text-align: left;
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
    <Link className="block py-2 px-3 h-full" to={`/${props.to}/`}>
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
