import * as React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { cs } from "../../../styles"

interface IPassedProps {
  /** ブログコンテンツのfrontmatter */
  title: string
  /** 呼び出し元から書き換えるためのclassName */
  className?: string
  /** カードに表示するブログの出だし */
  excerpt?: string
  path: string
}

interface IContainerProps {
  setHover: (state: boolean) => void
  isHover: boolean
}

interface IProps extends IPassedProps, IContainerProps {}

const Component: React.FC<IProps> = ({
  className,
  title,
  path,
  excerpt,
  setHover,
}) => (
  <div
    className={className}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
    <Link to={path || "/"}>
      <div className={"body"}>
        <h3 className={"articleTitle"}>{title}</h3>
        {excerpt && <p className={"excerpt"}>{excerpt}</p>}
      </div>
    </Link>
  </div>
)

const StyledComponent = styled(Component)<{ isHover: boolean }>`
  text-align: left;
  overflow-wrap: anywhere;
  max-width: 30%;
  @media (max-width: 700px) {
    max-width: 100%;
  }
  transition: opacity 0.4s;
  :hover {
    opacity: 0.7;
  }
  background: ${cs.cardBackground};
  border-radius: 8px;
  border: solid 1px transparent;
  box-shadow: 5px 15px 30px -10px rgba(0, 74, 134, 0.1);
  padding-bottom: 8px;

  ${(props) =>
    props.isHover &&
    `& .wrapper {
  border-color: #2196f3;
}`}

  & .body {
    padding: 24px;
  }

  & .articleTitle {
    font-size: 20px;
    font-weight: 600;
    margin-top: 12px;
  }

  & .excerpt {
    text-align: left;
    margin-top: 20px;
    color: gray;
    font-size: 14px;
    line-height: 28px;
  }
`

const CardContainer: React.FC<IPassedProps> = (props) => {
  const [isHover, setHover] = React.useState(false)
  return <StyledComponent {...{ ...props, isHover, setHover }} />
}

export const Card = CardContainer
