import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { Spellbook } from '../../types'
import { useSpellbooks } from '../hooks/useSpellbooks'
import Entry from './Entry'
import EntryValue from './EntryValue'

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
            <Entry key={index} onPress={openSpellbook(spellbook)}>
              <EntryValue label="Name" value={spellbook.name} />
              <EntryValue label="Character" value={spellbook.character} />
            </Entry>
          )
        })}
    </View>
  )
}

export default SpellbookEntries
