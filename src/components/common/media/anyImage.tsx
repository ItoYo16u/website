import Img from "gatsby-image"
import React from "react"
import { Fragment } from "react"
import useAnyImage from "../../../hooks/useAnyImage"

export const AnyImage = ({
  filename,
  alt,
  className,
}: {
  filename: string
  alt?: string
  className?: string
}): JSX.Element => {
  console.log(`passed image = ${filename}`)
  const fluid = useAnyImage(filename)

  return fluid == undefined ? (
    <Fragment></Fragment>
  ) : (
    <Img className={className} alt={alt} fluid={fluid} />
  )
}
