import React from "react"
import renderer from "react-test-renderer"

import { AnchorOrLink } from "../../../src/components/atoms/AnchorOrLink"

describe("AnchorOrLink", () => {
  for (const i of [
    "hoge",
    "/hoge",
    "hoge/",
    "/hoge/",
    "hoge/fuga",
    "hoge/fuga/",
    "/hoge/fuga/",
    "google.com",
    "google.com/",
    "https://google.com",
    "https://google.com/",
  ]) {
    it(`renders correctly: ${i}`, () => {
      const tree = renderer
        .create(<AnchorOrLink to={i}>{i}</AnchorOrLink>)
        .toJSON()
      console.log(
        `${i} => ${
          Object.keys(tree?.props!).includes("aria-current")
            ? "Link - internal link"
            : "a - external link"
        }`
      )
      expect(tree).toMatchSnapshot()
    })
  }
})
