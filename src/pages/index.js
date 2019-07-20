import React from "react"

import Header from "../components/header"
import CharacterSelect from "../components/characterSelect"
import CharacterCard from "../components/characterCard"

const IndexPage = () => (
  <>
    <Header siteTitle="FUTURAMA" />
    <CharacterSelect />
    <CharacterCard />
  </>
)

export default IndexPage
