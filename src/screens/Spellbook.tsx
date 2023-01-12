import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import { Text, View, Button } from 'react-native'
import { RouteParams } from '../types'
import Entry from '../components/Entry'
import EntryValue from '../components/EntryValue'
import { useSpells } from '../hooks/useSpells'
import { containers } from '../styles/containers'

type SpellbookProps = StackScreenProps<RouteParams, 'Spellbook'>

const Spellbook: FC<SpellbookProps> = ({ route, navigation }) => {
  const [spells] = useSpells(route.params.spellbook)

  return (
    <View style={containers.page}>
      <View style={containers.content}>
        <Entry>
          <EntryValue value={route.params.spellbook.name} />
          <Button
            title="Edit"
            onPress={() => {
              navigation.navigate('Edit spellbook', {
                spellbook: route.params.spellbook,
              })
            }}
          />
        </Entry>
        {!spells && <Text>Loading...</Text>}
        {spells &&
          spells.map((spell, index) => (
            <Entry
              key={index}
              onPress={() => {
                console.log('Navigate to spell')
              }}
            >
              <EntryValue label="Name" value={spell.name} flexGrow={2} />
              <EntryValue
                label="Target number"
                value={`${spell.targetNumber}`}
                alignment="center"
              />
            </Entry>
          ))}
        <View style={{ width: '100%' }}>
          <Button
            title="New Spell"
            onPress={() => {
              navigation.navigate('Create a spell', {
                spellbook: route.params.spellbook,
              })
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Spellbook
