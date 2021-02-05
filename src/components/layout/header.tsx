import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { GithubIcon } from "../common/icon/github_icon"
import { TwitterIcon } from "../common/icon/twitter_icon"
import { Title } from "../common/typography/title"
import { HorizontallySeparatedList } from "./separating"

interface IPassedProps {
  className?: string
  siteTitle: string
}

interface IContainerProps {
  // setDrawerState: React.Dispatch<React.SetStateAction<boolean>>
}

interface IProps extends IPassedProps, IContainerProps {}

const Component: React.FC<IProps> = ({
  className,
  siteTitle,
  //setDrawerState,
}) => (
  <header className={className}>
    <div className="headerContentWrapper">
      <Link to="/">
        <Title className={"title"}>{siteTitle}</Title>
      </Link>
      <div>
        <HorizontallySeparatedList spacing={4}>
          {[
            <GithubIcon key="1" githubId={"ItoYo16u"}></GithubIcon>,
            <TwitterIcon key="2" twitterId={"by110416"}></TwitterIcon>,
          ]}
        </HorizontallySeparatedList>
        <button
          aria-label="menu"
          onClick={() => {
            //  setDrawerState(true)
          }}
          className="button"
        >
          <span>
            {/* menu */}
            <svg viewBox="0 0 24 24" width={24} height={24} fill="#2196f3">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </header>
)

const StyledComponent = styled(Component)`
  background: white;
  height: 70px;
  padding: 0px 12px 0px 24px;
  position: fixed;
  transform: translate3d(0, 0, 0);
  top: 0;
  width: 100%;
  z-index: 1;
  border-bottom: 1px solid rgba(92, 147, 180, 0.17);

  & .headerContentWrapper {
    margin: auto;
    max-width: 1280px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .button {
    flex: 0 0 auto;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    color: white;
    padding: 8px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
    & > span {
      // TODO: これがないと高さが揃わないのを調べる
      display: flex;
    }
  }

  & .title {
    margin-top: 0px;
    font-size: 20px;
    font-weight: 900;
  }
  @media screen and (max-width: 1024px) {
    & .pcOnly {
      display: none;
    }
  }
`

const ContainerComponent: React.FC<IPassedProps> = (props) => {
  return <StyledComponent {...props}></StyledComponent>
}

export const Header = ContainerComponent
