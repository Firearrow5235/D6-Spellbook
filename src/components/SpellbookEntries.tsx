import React, { useState, useEffect } from "react"
import { Text, View } from "react-native"
import { useSpellbooks } from "../hooks/useSpellbooks"

const SpellbookEntries = () => {
  const [spellbooks] = useSpellbooks()

  return (
    <View>
      {!spellbooks && <Text>Loading...</Text>}
      {(spellbooks && spellbooks.length > 0) && spellbooks.map((spellbook, index) => {
        return (
          <View key={index}>
            <Text>{spellbook.name}</Text>
            <Text>{spellbook.character}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default SpellbookEntries