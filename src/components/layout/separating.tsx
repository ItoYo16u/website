import React, { Fragment, ReactChild, ReactElement } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

enum Align {
  center,
  left,
  right,
}

interface IPassedProps {
  children: ReactElement[]
  className?: string
  spacing: number
  align?: Align
}

const Component: React.FC<IPassedProps> = ({
  spacing,
  children,
  className,
  align,
}) => (
  <Fragment>
    {children.map((v) => (
      <div key={v.key}
        css={css`
          display: inline-block;
          padding: 0px ${spacing}px;
          text-align: ${align ?? Align.left};
        `}
      >
        {v}
      </div>
    ))}
  </Fragment>
)

const StyledComponent = styled(Component)``

export const HorizontallySeparatedList = StyledComponent
