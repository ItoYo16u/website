import React from "react"
import renderer from "react-test-renderer"

import { MDXComponents } from "../../../src/components/atoms/MDXComponents"

for (const [k, E] of Object.entries(MDXComponents)) {
  describe(k, () => {
    it(`renders correctly: ${k}`, () => {
      const tree = renderer.create(<E>てすてす</E>).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
}
