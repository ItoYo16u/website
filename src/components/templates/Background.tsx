import { BackgroundProps } from "./templates"
import React from "react"
import Twemoji from "react-twemoji"
import "../../styles/tailwind.css"
import styled from "@emotion/styled"
import { PlainComponent } from "../../utils/PlainComponent"
import { css, Global } from "@emotion/core"
import { cs, mq } from "../../styles"
import SEO from "../common/functionality/Seo"
/** Background : useful when dynamically generate site title and description */
const Plain: PlainComponent<BackgroundProps> = (props) => (
  <Twemoji noWrapper>
    <div className={props.className}>
      <SEO title={props.title} description={props.description} />
      <Global
        styles={css`
          :root {
            font-size: inherit;
            scrollbar-color: ${cs.border} ${cs.background};
            ${mq[0]} {
              font-size: 20px;
            }
          }
        `}
      />
      {props.children}
    </div>
  </Twemoji>
)
const Styled = styled(Plain)`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color:${cs.background};
  color: ${cs.text};
  font-weight: 400;
`
// wrapper component for website.
export { Styled as Background }
