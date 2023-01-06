import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { Button, View } from 'react-native'
import { RouteParams, Spell, Spellbook } from '../../types'
import Input from '../components/Input'
import { containers } from '../styles/containers'
import { v4 as uuidv4 } from 'uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Calculator from '../components/Calculator'

type CreateSpellProps = StackScreenProps<RouteParams, 'Create a spell'>

const CreateSpell: FC<CreateSpellProps> = ({ navigation, route }) => {
  const [calculatorOpen, setCalculatorOpen] = useState(false)
  const [newSpell, setNewSpell] = useState({
    Name: '',
    Skill: '',
    'Spell Total': '',
    'Target Number': '',
    Effect: '',
    'Casting Time': '',
    Range: '',
    Duration: '',
  })

  const handleChange = (key: string) => (newValue: string) => {
    setNewSpell({
      ...newSpell,
      [key]: newValue,
    })
  }

  const handleClose = (spellTotal: string, targetNumber: string) => () => {
    setNewSpell({
      ...newSpell,
      'Spell Total': spellTotal,
      'Target Number': targetNumber,
    })

    setCalculatorOpen(false)
  }

  const createSpell = async () => {
    const id = uuidv4()

    const spell: Spell = {
      id,
      name: newSpell.Name,
      skill: newSpell.Skill,
      spellTotal: parseInt(newSpell['Spell Total']),
      targetNumber: parseInt(newSpell['Target Number']),
      effect: newSpell.Effect,
      castingTime: newSpell['Casting Time'],
      range: newSpell.Range,
      duration: newSpell.Duration,
      otherAspects: [],
    }

    const spellbook: Spellbook = {
      ...route.params.spellbook,
      spells: [...route.params.spellbook.spells, id],
    }

    const spellString = JSON.stringify(spell)
    const spellbookString = JSON.stringify(spellbook)

    await AsyncStorage.setItem(id, spellString)
    await AsyncStorage.setItem(route.params.spellbook.id, spellbookString)

    navigation.navigate('Spellbook', { spellbook })
  }

  return (
    <View style={containers.page}>
      <View style={containers.content}>
        {Object.entries(newSpell).map(([key, value]) => (
          <Input
            key={key}
            value={value}
            setValue={handleChange(key)}
            placeholder={key}
            labelHidden
          />
        ))}
        <View style={{ marginBottom: '8px' }}>
          <Button
            title="Use Calculator"
            onPress={() => setCalculatorOpen(true)}
          />
        </View>
        <Button title="Create" onPress={createSpell} />
      </View>
      <Calculator visible={calculatorOpen} handleClose={handleClose} />
    </View>
  )
}

export default CreateSpell
