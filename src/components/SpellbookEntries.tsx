import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { Spellbook } from '../../types'
import { useSpellbooks } from '../hooks/useSpellbooks'
import SpellbookEntry from './SpellbookEntry'

type SpellbookEntriesProps = {
  openSpellbook: (spellbook: Spellbook) => () => void
}

const SpellbookEntries: FC<SpellbookEntriesProps> = ({ openSpellbook }) => {
  const [spellbooks] = useSpellbooks()

  return (
    <View>
      {!spellbooks && <Text>Loading...</Text>}
      {spellbooks &&
        spellbooks.length > 0 &&
        spellbooks.map((spellbook, index) => {
          return (
            <SpellbookEntry
              key={index}
              spellbook={spellbook}
              openSpellbook={openSpellbook(spellbook)}
            />
          )
        })}
    </View>
  )
}

export default SpellbookEntries
