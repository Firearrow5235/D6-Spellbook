import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { containers } from '../styles/containers'
import { RouteParams, Spellbook } from '../types'
import SpellbookForm from '../components/SpellbookForm'

type EditSpellbookProps = StackScreenProps<RouteParams, 'Edit spellbook'>

const EditSpellbook: FC<EditSpellbookProps> = ({ route, navigation }) => {
  const [spellbook, setSpellbook] = useState({
    Name: route.params.spellbook.name,
    Character: route.params.spellbook.character,
    'Core Attribute': route.params.spellbook.coreAttribute,
  })

  const handleChange = (key: string) => (newValue: string) => {
    setSpellbook({
      ...spellbook,
      [key]: newValue,
    })
  }

  const editSpellbook = async () => {
    const now = new Date(Date.now())

    const updatedSpellbook = {
      ...route.params.spellbook,
      name: spellbook.Name,
      character: spellbook.Character,
      coreAttribute: spellbook['Core Attribute'],
      updatedAt: now.toISOString(),
    } as Spellbook

    await AsyncStorage.setItem(
      route.params.spellbook.id,
      JSON.stringify(updatedSpellbook)
    )

    navigation.navigate('Spellbook', { spellbook: updatedSpellbook })
  }

  return (
    <View style={containers.page}>
      <SpellbookForm
        spellbook={spellbook}
        handleChange={handleChange}
        spellbookActions={[{ label: 'Update', action: editSpellbook }]}
      />
    </View>
  )
}

export default EditSpellbook
