import { Background } from "./Background"
import React from "react"
import { Meta } from "./templates"
import styled from "@emotion/styled"
import { ss, mq } from "../../styles"
import { SubHeader } from "../layout/sub_header"
import { Layout } from "../layout/layout"

export type BlogPageProps = Meta & { className?: string }

const BlogMain = styled.main`
  ${ss.letterSpacing}
  ${ss.container}
  ${ss.hidden}
  ${ss.centered}
  border-radius: 0;
  border: none;
  margin-bottom: 100px;
`
// scaffold of blog
export const BlogPage: React.FC<BlogPageProps> = (props) => (
  <Background description={props.description} title={props.title}>
    <Layout>
      <SubHeader currentPage={props.title} />
      <BlogMain className={props.className}>{props.children}</BlogMain>
    </Layout>
  </Background>
)
