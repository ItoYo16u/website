import * as React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { Title } from "../common/typography/title"
import { css } from "@emotion/core"
import { HorizontallySeparatedList } from "./separating"

interface IProps {
  className?: string
  currentPage: string
}

const Component: React.FC<IProps> = ({ className, currentPage }) => (
  <div
    css={css`
      width: 100%;
      background-color: #fff;
      padding: 56px;
    `}
  >
    <div
      css={css`
        margin: auto;
        max-width: 960px;
        text-align: left;
      `}
    >
      <Title>{currentPage}</Title>
      <HorizontallySeparatedList spacing={4}>
        {[
          <Link aria-label="home" key="home" className="inlineNav" to={"/"}>
            #Home
          </Link>,
          <Link aria-label="tags" key="tags" className="inlineNav" to={"/tags"}>
            #Tags
          </Link>,
          <Link aria-label="about" key="about" className="inlineNav" to={"/about"}>
            #About
          </Link>,
        ]}
      </HorizontallySeparatedList>
    </div>
  </div>
)

const StyledComponent = styled(Component)``

export const SubHeader = StyledComponent
