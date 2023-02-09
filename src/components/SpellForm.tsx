import React, { FC } from 'react'
import { View, Button } from 'react-native'
import { containers } from '../styles/containers'
import { SpellInput } from '../types'
import Input from './Input'

type SpellFormProps = {
  spell: SpellInput
  handleChange: (key: string) => (newValue: string) => void
  spellActions: { label: string; action: () => void }[]
}

const SpellForm: FC<SpellFormProps> = ({
  spell,
  handleChange,
  spellActions,
}) => {
  return (
    <View style={containers.content}>
      {Object.entries(spell).map(([key, value]) => (
        <Input
          key={key}
          value={value}
          setValue={handleChange(key)}
          placeholder={key}
          labelHidden
        />
      ))}
      {spellActions.map((spellAction, index) => (
        <View
          key={index}
          style={{
            marginBottom: index === spellActions.length - 1 ? '0px' : '8px',
          }}
        >
          <Button title={spellAction.label} onPress={spellAction.action} />
        </View>
      ))}
    </View>
  )
}

export default SpellForm
