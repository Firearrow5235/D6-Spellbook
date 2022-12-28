import React, { FC } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Spellbook } from '../../types'

type SpellbookEntryProps = {
  spellbook: Spellbook
  openSpellbook: () => void
}

const styles = StyleSheet.create({
  container: {
    padding: '8px',
    backgroundColor: '#dddddd',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: '8px',
  },
  valueWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  label: {
    color: '#999',
    fontSize: 10,
  },
  value: {
    color: '#222',
  },
})

const SpellbookEntry: FC<SpellbookEntryProps> = ({
  spellbook,
  openSpellbook,
}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        openSpellbook()
      }}
    >
      <View style={styles.container}>
        <View style={styles.valueWrapper}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{spellbook.name}</Text>
        </View>
        <View style={styles.valueWrapper}>
          <Text style={styles.label}>Character</Text>
          <Text style={styles.value}>{spellbook.character}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default SpellbookEntry
