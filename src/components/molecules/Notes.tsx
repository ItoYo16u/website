import React, { FC } from "react"
import {
  faInfo,
  IconDefinition,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { css } from "@emotion/core"

export interface NoteProps {
  icon: IconDefinition
  color?: string
}

export const Note: FC<NoteProps> = ({ color, icon, children }) => (
  <div css={css`
      color: #FFF;
      background-color: ${color};
      padding: 4px 12px;
      margin-bottom: 12px;
      display: flex;
      column-gap: 8px;
    `} >
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div css={css`
      `}>
      {children}
    </div>
  </div>
)

export const NoteFactory: (args: {
  icon: IconDefinition
  color: string
}) => FC = (args) => (props) => <Note {...args} {...props} />

export const Warn = NoteFactory({
  icon: faExclamationTriangle,
  color: "rgba(252, 157, 3,0.6)",
})

export const Info = NoteFactory({
  icon: faInfoCircle,
  color: "rgba(3, 128, 252,0.6)",
})
