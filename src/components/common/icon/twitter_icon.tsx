import React, { ReactChild } from "react"
import styled from "@emotion/styled"
import { Stylable } from "../../../utils/Components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { cs } from "../../../styles"
library.add(faTwitter)

type TwitterIconProps = Stylable & {
  twitterId: string
  children?: ReactChild
}

const Plain: React.FC<TwitterIconProps> = ({ twitterId, className, css }) => (
  <a href={`https://twitter.com/${twitterId}`}>
    <FontAwesomeIcon
      aria-label="Twitterへのリンク"
      size={"lg"}
      color={cs.primaryAccent}
      className={className}
      css={css}
      icon={faTwitter}
    />
  </a>
)

export const TwitterIcon = styled(Plain)`
  margin: 2px;
`
