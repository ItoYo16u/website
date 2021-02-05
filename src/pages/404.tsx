import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="w-full h-screen absolute  text-center text-base font-serif">
    <h1 className="text-400">404 Not Found</h1>
    <p>
      <Link to="/">トップに戻る</Link>
    </p>
  </div>
)
