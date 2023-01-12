import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { containers } from '../styles/containers'
import { RouteParams } from '../types'
import SpellbookForm from '../components/SpellbookForm'
import { deleteSpellbook, editSpellbook } from '../lib/spellbook'

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

  const handleEdit = async () => {
    const updatedSpellbook = await editSpellbook(
      route.params.spellbook,
      spellbook
    )

    navigation.navigate('Spellbook', { spellbook: updatedSpellbook })
  }

  const handleDelete = async () => {
    const updatedRegistry = await deleteSpellbook(route.params.spellbook)

    navigation.navigate('Spellbooks', { registry: updatedRegistry })
  }

  return (
    <View style={containers.page}>
      <SpellbookForm
        spellbook={spellbook}
        handleChange={handleChange}
        spellbookActions={[
          { label: 'Update', action: handleEdit },
          { label: 'Delete', action: handleDelete },
        ]}
      />
    </View>
  )
}

export default EditSpellbook
