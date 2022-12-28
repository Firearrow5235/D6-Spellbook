import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useState } from 'react'
import { Button, View } from 'react-native'
import { RouteParams } from '../../types'
import Input from '../components/Input'
import { containers } from '../styles/containers'

type CreateSpellProps = StackScreenProps<RouteParams, 'Create a spell'>

const CreateSpell: FC<CreateSpellProps> = () => {
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
          <Button title="Use Calculator" onPress={() => null} />
        </View>
        <Button title="Create" onPress={() => null} />
      </View>
    </View>
  )
}

export default CreateSpell
