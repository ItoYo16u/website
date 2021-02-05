import * as React from "react"
import styled from "@emotion/styled"
import { HorizontallySeparatedList } from "./separating"
import { GithubIcon } from "../common/icon/github_icon"
import { TwitterIcon } from "../common/icon/twitter_icon"

interface IProps {
  className?: string
}

const Component: React.FC<IProps> = ({ className }) => (
  <footer className={className}>
    <div>
      <HorizontallySeparatedList spacing={4}>
        {[
          <GithubIcon key="github" githubId={"ItoYo16u"}></GithubIcon>,
          <TwitterIcon key="twitter" twitterId={"by110416"}></TwitterIcon>,
        ]}
      </HorizontallySeparatedList>
    </div>
    <p>
      © {new Date().getFullYear()}, Built with
      <a
        aria-label="link to gatsby"
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Gatsby
      </a>
    </p>
    <p>
      createdBy
      <a
        aria-label="link to twitter"
        href="https://twitter.com/by110416"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        @110416
      </a>
    </p>
    <p>This site uses Google Analytics.</p>
  </footer>
)

const StyledComponent = styled(Component)`
  margin-bottom: 0;
  margin-top: auto;
  background: white;
  padding: 8px;
  text-align: center;
  color: grey;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > p {
    margin-top: 12px;
  }

  > p > a {
    text-decoration: underline;
    font-weight: bold;
  }
`

export const Footer = StyledComponent
