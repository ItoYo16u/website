import { graphql, useStaticQuery } from "gatsby"
import { DeepPartial, DeepReadonly } from "utility-types"

type Props = DeepReadonly<{
  site: DeepPartial<{
    siteMetadata: SiteMetadata
  }>
}>

type SiteMetadata =
  | DeepReadonly<
      DeepPartial<{
        siteTitle?: string | undefined
        siteTitleAlt?: string | undefined
        siteHeadline?: string | undefined
        siteUrl?: string | undefined
        siteDescription?: string | undefined
        favicon: string | undefined
        siteLanguage?: string | undefined
        author?: string | undefined
        social?:
          | {
              twitter: string
              github: string
              qiita: string
            }
          | undefined
      }>
    >
  | undefined

/**
 * ex. const {siteTitle, siteUrl} = useSiteMetadata();
 */
export default (): SiteMetadata => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteDescription
          siteUrl
          siteLanguage
          author
          favicon
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
