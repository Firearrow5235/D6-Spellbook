import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { RouteParams, SpellInput } from '../types'
import { containers } from '../styles/containers'
import Calculator from '../components/Calculator'
import SpellForm from '../components/SpellForm'
import { createSpell } from '../lib/spell'

type CreateSpellProps = StackScreenProps<RouteParams, 'Create a spell'>

const CreateSpell: FC<CreateSpellProps> = ({ navigation, route }) => {
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const [spellInput, setSpellInput] = useState({
    Name: '',
    Skill: '',
    'Spell Total': '',
    'Target Number': '',
    Effect: '',
    'Casting Time': '',
    Range: '',
    Duration: '',
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

  const handleCreate = async () => {
    const updatedSpellbook = await createSpell(
      spellInput,
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
          { label: 'Create', action: handleCreate },
        ]}
      />
      <Calculator visible={calculatorOpen} handleClose={handleClose} />
    </View>
  )
}

export default CreateSpell
