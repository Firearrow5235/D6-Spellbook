import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { RouteParams, SpellbookInput } from '../types'
import { containers } from '../styles/containers'
import SpellbookForm from '../components/SpellbookForm'
import { createSpellbook } from '../lib/spellbook'

type CreateSpellbookProps = StackScreenProps<RouteParams, 'Create a spellbook'>

const CreateSpellbook: FC<CreateSpellbookProps> = ({ navigation }) => {
  const [spellbook, setSpellbook] = useState({
    Name: '',
    Character: '',
    'Core Attribute': '',
  } as SpellbookInput)

  const handleChange = (key: string) => (newValue: string) => {
    setSpellbook({
      ...spellbook,
      [key]: newValue,
    })
  }

  const handleCreate = async () => {
    const { updatedRegistry } = await createSpellbook(spellbook)

    navigation.navigate('Spellbooks', { registry: updatedRegistry })
  }

  return (
    <View style={containers.page}>
      <SpellbookForm
        spellbook={spellbook}
        handleChange={handleChange}
        spellbookActions={[{ label: 'Create', action: handleCreate }]}
      />
    </View>
  )
}

export default CreateSpellbook
