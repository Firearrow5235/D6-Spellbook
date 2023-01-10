import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { RouteParams, Spellbook } from '../types'
import { containers } from '../styles/containers'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { v4 as uuidv4 } from 'uuid'
import SpellbookForm from '../components/SpellbookForm'

type CreateSpellbookProps = StackScreenProps<RouteParams, 'Create a spellbook'>

const CreateSpellbook: FC<CreateSpellbookProps> = ({ navigation }) => {
  const [spellbook, setSpellbook] = useState({
    Name: '',
    Character: '',
    'Core Attribute': '',
  })

  const handleChange = (key: string) => (newValue: string) => {
    setSpellbook({
      ...spellbook,
      [key]: newValue,
    })
  }

  const createSpellbook = async () => {
    let spellbooks: string[]
    const spellbooksJson = await AsyncStorage.getItem('Spellbooks')

    if (spellbooksJson != null) {
      spellbooks = JSON.parse(spellbooksJson)
    } else {
      spellbooks = []
    }

    const id = uuidv4()
    const now = new Date(Date.now())

    const spellbookString = JSON.stringify({
      id,
      name: spellbook.Name,
      character: spellbook.Character,
      coreAttribute: spellbook['Core Attribute'],
      spells: [],
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    } as Spellbook)
    const spellbooksString = JSON.stringify([...spellbooks, id])

    await AsyncStorage.setItem('Spellbooks', spellbooksString)
    await AsyncStorage.setItem(id, spellbookString)

    navigation.navigate('Spellbooks')
  }

  return (
    <View style={containers.page}>
      <SpellbookForm
        spellbook={spellbook}
        handleChange={handleChange}
        spellbookActions={[{ label: 'Create', action: createSpellbook }]}
      />
    </View>
  )
}

export default CreateSpellbook
