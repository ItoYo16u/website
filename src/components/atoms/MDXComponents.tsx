import { css } from "@emotion/core"
import { Components } from "@mdx-js/react"
import React from "react"
import { DeepReadonly } from "ts-essentials"
import styled from "@emotion/styled"
import { cs, ss ,textColor} from "../../styles"
import dracula from "prism-react-renderer/themes/dracula"
import { LinkText } from "../common/typography/link_text"
import Highlight, { defaultProps, Prism } from "prism-react-renderer"
;(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-scala")
require("prismjs/components/prism-diff")

type Elm = JSX.IntrinsicElements

export const MDXComponents: DeepReadonly<Required<Components>> = {
  h1: styled.h1`
    color: ${textColor.Darker};
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  `,
  h2: styled.h2`
    color: ${textColor.Dark};
    font-weight: medium;
    font-size: 1.3rem;
    padding-right: 0.25rem;
    padding-top: 0.7rem;
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
  `,
  h3: styled.h3`
    font-size: 1.2rem;
    padding-right: 0.25rem;
    padding-top: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  `,
  h4: styled.h4``,
  h5: styled.h5``,
  h6: styled.h6``,
  blockquote: styled.blockquote``,
  p: styled.p`
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-right: 0.5rem;
  `,
  a: (props: Elm["a"]) =>
    props.className?.includes(`header-autolink`) ? (
      <a
        {...props}
        css={css`
          color: ${textColor.Plain};
          svg {
            display: none;
          }
        `}
      ></a>
    ) : (
      <LinkText to={props.href!} {...props} />
    ),
  strong: styled.strong``,
  ul: (props: Elm["ul"]) => (
    <ul className="list-disc py-1 px-2 pl-8" {...props} />
  ),
  ol: (props: Elm["ol"]) => (
    <ol className="list-decimal py-1 px-2 pl-8" {...props}></ol>
  ),
  delete: styled.del``,
  em: styled.em``,
  hr: styled.hr`
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    border: 1px solid ${cs.border};
  `,
  img: styled.img``,
  inlineCode: styled.code``,
  li: styled.li``,
  pre: (props: Elm["pre"]) => {
    const className = props?.children?.props.className || ""
    const matches = className.match(/language-(?<lang>.*):?/)
    return (
      <Highlight
        {...defaultProps}
        theme={dracula}
        code={props?.children?.props.children||""}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang.split(":")[0]
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
  thematicBreak: styled.br``,
  tr: styled.tr``,
  table: styled.table``,
  td: styled.td``,
}

export default MDXComponents
