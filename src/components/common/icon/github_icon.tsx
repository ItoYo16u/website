import React, { ReactChild } from "react"
import styled from "@emotion/styled"
import { Stylable } from "../../../utils/Components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
library.add(faGithub)

type TwitterIconProps = Stylable & {
  githubId: string
  children?: ReactChild
}

const Plain: React.FC<TwitterIconProps> = ({ githubId, className, css }) => (
  <a href={`https://github.com/${githubId}`}>
    <FontAwesomeIcon
      aria-label="githubへのリンク"
      size={"lg"}
      color="#93a5b1"
      className={className}
      css={css}
      icon={faGithub}
    />
  </a>
)

export const GithubIcon = styled(Plain)`
  margin: 2px;
`
