import React from "react"
import renderer from "react-test-renderer"

import PostList from "../../../src/components/templates/blog/PostList"

describe("PostList", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <PostList
          {...{
            posts: [
              {
                excerpt:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
                id: `c3884f97-b0d1-8e34-edc7-af4a-3ce9fe72e66`,
                path: "hoge",
                title: "Lorem ipsum",
              },
            ],
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

const random16 = () => Math.round(Math.random() * 0xffff).toString(16)
