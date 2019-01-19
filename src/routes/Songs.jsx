import React from "react"
import Card from "../Card"

const Songs = props => (
  [...Array(20)].map((x, i) =>
    <Card index={i} 
          img={`https://source.unsplash.com/collection/923414/${480+i}x${480+i}`}
    />
  )
)

export default Songs