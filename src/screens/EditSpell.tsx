import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { View } from 'react-native'
import Calculator from '../components/Calculator'
import SpellForm from '../components/SpellForm'
import { deleteSpell, updateSpell } from '../lib/spell'
import { containers } from '../styles/containers'
import { RouteParams, SpellInput } from '../types'

type EditSpellProps = StackScreenProps<RouteParams, 'Edit spell'>

const EditSpell: FC<EditSpellProps> = ({ route, navigation }) => {
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const [spellInput, setSpellInput] = useState({
    Name: route.params.spell.name,
    Skill: route.params.spell.skill,
    'Spell Total': `${route.params.spell.spellTotal}`,
    'Target Number': `${route.params.spell.targetNumber}`,
    Effect: route.params.spell.effect,
    'Casting Time': route.params.spell.castingTime,
    Range: route.params.spell.range,
    Duration: route.params.spell.duration,
  } as SpellInput)

  const handleChange = (key: string) => (newValue: string) => {
    setSpellInput({
      ...spellInput,
      [key]: newValue,
    })
  }

  const handleOpen = () => {
    setCalculatorOpen(true)
  }

  const handleClose = (spellTotal: string, targetNumber: string) => () => {
    setSpellInput({
      ...spellInput,
      'Spell Total': spellTotal,
      'Target Number': targetNumber,
    })

    setCalculatorOpen(false)
  }

  const handleUpdate = async () => {
    await updateSpell(spellInput, route.params.spell)

    navigation.navigate('Spellbook', { spellbook: route.params.spellbook })
  }

  const handleDelete = async () => {
    const updatedSpellbook = await deleteSpell(
      route.params.spell.id,
      route.params.spellbook
    )

    navigation.navigate('Spellbook', { spellbook: updatedSpellbook })
  }

  return (
    <View style={containers.page}>
      <SpellForm
        spell={spellInput}
        handleChange={handleChange}
        spellActions={[
          { label: 'Use Calculator', action: handleOpen },
          { label: 'Update', action: handleUpdate },
          { label: 'Delete', action: handleDelete },
        ]}
      />
      <Calculator visible={calculatorOpen} handleClose={handleClose} />
    </View>
  )
}

export default EditSpell
