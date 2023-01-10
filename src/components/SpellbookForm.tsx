import React, { FC } from 'react'
import { View, Button } from 'react-native'
import { containers } from '../styles/containers'
import Input from './Input'

type SpellbookFormProps = {
  spellbook: { Name: string; Character: string; 'Core Attribute': string }
  handleChange: (key: string) => (newValue: string) => void
  spellbookActions: { label: string; action: () => void }[]
}

const SpellbookForm: FC<SpellbookFormProps> = ({
  spellbook,
  handleChange,
  spellbookActions,
}) => {
  return (
    <View style={containers.content}>
      {Object.entries(spellbook).map(([key, value]) => (
        <Input
          key={key}
          value={value}
          setValue={handleChange(key)}
          placeholder={key}
          labelHidden
        />
      ))}
      {spellbookActions.map((spellbookAction, index) => (
        <Button
          key={index}
          title={spellbookAction.label}
          onPress={spellbookAction.action}
        />
      ))}
    </View>
  )
}

export default SpellbookForm
