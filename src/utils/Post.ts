import { DeepReadonly, DeepRequired } from "ts-essentials"
import { TOC } from "../components/organisms/TableOfContents"
import { Mdx, MdxFrontmatter, Maybe } from "../../types/graphqlTypes"

export type Post = DeepReadonly<{
  // id
  id: string
  /**table of content
   */
  tableOfContents: TOC
  /**body of content*/
  body: string
  excerpt: string
  /** excerpt from first N words */
  path: string
  /**public|private */
  status: string
  tags: readonly string[]
  title: string
  /**published date */
  date: string
  description: string
}>
/** allMdx.edges.[].node: Mdx を Postに変換する。すべてのfrontmatter値のnullチェックを行う。*/
export const toPostStrict = <T extends keyof Post>({
  body,
  excerpt,
  id,
  tableOfContents,
  frontmatter,
}: Mdx): Pick<Post, T> => {
  /* 
    スマートキャスト働かせてnullチェックするやりかたがわからんかった。のでゴリ押しキャスト
    */
  if (frontmatter == null || frontmatter == undefined) {
    throw new Error("frontmatter is null")
  }
  Object.values(frontmatter).map((v) => {
    if (v == null) {
      throw new TypeError()
    }
  })

  const post = {
    body,
    excerpt,
    id,
    tableOfContents,
    ...(frontmatter as DeepRequired<MdxFrontmatter>),
  }

  return post
}

/** Post化。nullチェックしない。全部のデータがほしいわけじゃないときに
 */
export const toPostPartial = <T extends keyof Post>({
  body,
  excerpt,
  id,
  tableOfContents,
  frontmatter,
}: DeepReadonly<Partial<Mdx>>): Pick<Post, T> => {
  if (frontmatter == null || frontmatter == undefined) {
    throw new Error("frontmatter is null")
  }
  Object.values(frontmatter).map((v) => {
    if (v == null) {
      throw new TypeError()
    }
  })
  const post = {
    body,
    excerpt,
    id,
    tableOfContents,
    ...(frontmatter as DeepRequired<MdxFrontmatter>),
  }

  return post as Pick<Post, T>
}
