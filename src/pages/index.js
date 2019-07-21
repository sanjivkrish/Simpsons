import React from "react"

import Header from "../components/header"
import CharacterSelect from "../components/characterSelect"
import CharacterCard from "../components/characterCard"
import CharacterQuotes from "../components/characterQuotes"

const IndexPage = () => (
  <>
    <Header siteTitle="FUTURAMA" />
    <CharacterSelect />
    <CharacterCard />
    <CharacterQuotes />
  </>
)

export default IndexPage
