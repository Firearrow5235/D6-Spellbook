import React, { useState } from 'react'
import { View } from 'react-native'
import Input from '../components/Input'
import { containers } from '../styles/containers'

const CreateSpell = () => {
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
      </View>
    </View>
  )
}

export default CreateSpell
