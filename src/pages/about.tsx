import React from "react"
import styled from "@emotion/styled"
import { Layout } from "../components/layout/layout"
import { Link } from "gatsby"
import { Background } from "../components/templates/Background"
import { Avator } from "../components/common/media/avator"

interface IPassedProps {
  // user.yamlの構造が入る
}

interface IProps extends IPassedProps {
  className?: string
}

const Component: React.FC<IProps> = (props) => {
  const { className } = props
  return (
    <Background title="about" description="about blog and author">
      <Layout>
        <div className={className}>
          <div className={"profileHeader"}>
            <div className={"row"}>
              <Avator path="110416.jpg" />
              <div className={"info"}>
                <span className={"name"}>110416</span>
                <p className={"description"}>ソフトウェアディベロッパーをやっています. 最近はTypeScript,Dart,Scalaを書いています.</p>
                <div className={"snsRow"}>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://twitter.com/by110416`}
                      aria-label="twitterへのリンク"
                    >
                      <button aria-label="twitterアイコン" className="button">
                        <span>
                          <figure className="twitterIcon">
                            <svg
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                              fill="#93a5b1"
                            >
                              {/* Twitter */}
                              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                            </svg>
                          </figure>
                        </span>
                      </button>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://github.com/ItoYo16u`}
                      aria-label="githubへのリンク"
                    >
                      <button aria-label="githubアイコン" className="button">
                        <span>
                          {/* GitHub */}
                          <figure className="githubIcon">
                            <svg
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                              fill="#93a5b1"
                            >
                              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
                            </svg>
                          </figure>
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={"about"}>
            <h2 className={"subtitle"}>Profile</h2>
            <div className="section">
              詳しくはこちら→
              <Link to={"/profile"}>Profile</Link>
            </div>
          </div>
          <div className={"about"}>
            <h2 className={"subtitle"}>About Blog</h2>
            <div className="section">
              <p>よくあるGatsby,TypeScript,MdxのJAMStackです. Code Highlightingと数式に対応済み.</p>
              詳しくはこちら→<Link to={"/about-blog"}>About Blog</Link>
            </div>
          </div>
          {/*<div className={"workExperience"}>
            <h2 className={"subtitle"}>Work Experience</h2>
            <div className="section">
              <p> Internship</p>
              <ul>
                <li>Feb 2020: Backend Engineer@Wantedly, Japan. </li>
                <li>Sep 2020: Backend Engineer@DMM, Japan. </li>
              </ul>
            </div>
          </div>*/}
          <div className={"links"}>
            <h2 className={"subtitle"}>Links</h2>
            <div className="section">
              <ul>
                <li>
                  <a href="https://twitter.com/by110416">Twitter (@by110416)</a>
                </li>
                <li>
                  <a href="https://github.com/ItoYo16u">GitHub (ItoYo16u)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </Background>
  )
}

const StyledComponent = styled(Component)`
  & figure.twitterIcon {
    padding: 2px;
  }
  & figure.githubIcon {
    padding: 2px;
  }
  & figure.twitterIcon svg {
    width: 36px;
    height: 36px;
  }
  & figure.githubIcon svg {
    width: 34px;
    height: 34px;
  }
  & .profileHeader {
    border-top: 1px solid rgba(92, 147, 180, 0.17);
    background: #fff;
    width: 100%;
    padding-top: 56px;
    padding-bottom: 64px;
  }

  @media screen and (max-width: 1024px) {
    & .profileHeader {
      border-radius: 8px;
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  & .row {
    max-width: 960px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    justify-content: safe center;
  }
  & .info {
    margin-left: 24px;
  }
  & .description {
    color: rgba(117, 117, 117, 1);
    line-height: 28px;
  }

  & .name {
    font-size: 24px;
    font-weight: bold;
    margin: 0.5em 0;
    margin-right: 12px;
    display: block;
  }

  & .snsRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
  }

  & .links,
  .about,
  .workExperience {
    max-width: 960px;
    margin: auto;
    margin-top: 56px;
  }
  & .links {
    margin-bottom: 100px;
  }

  & .section {
    line-height: 2;
    font-size: 16px;
    background-color: #fff;
    box-shadow: 5px 15px 30px -10px rgba(0, 74, 134, 0.1);
    border-radius: 8px;
    padding: 16px;
  }

  & .section a {
    color: rgb(33, 150, 243);
  }
  & .section ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  & .posts {
    max-width: 960px;
    margin: auto;
    margin-top: 56px;
  }
  & .subtitle {
    font-size: 24px;
    font-weight: bold;
    padding: 12px 0px;
  }

  @media screen and (max-width: 1024px) {
    padding: 16px;

    & .row {
      flex-direction: column;
    }

    & .snsRow {
      flex-direction: column;
      margin-bottom: 12px;
    }

    & .name {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin: 8px 0px;
      margin-bottom: 0;
    }

    & .info {
      margin-left: 0px;
    }

    & .image {
      display: none;
    }
  }
`

const ContainerComponent: React.FC<IPassedProps> = (props) => {
  return <StyledComponent {...props}></StyledComponent>
}

export default ContainerComponent
