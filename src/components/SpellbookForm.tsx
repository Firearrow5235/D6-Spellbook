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
        <View
          key={index}
          style={{
            marginBottom: index === spellbookActions.length - 1 ? '0px' : '8px',
          }}
        >
          <Button
            title={spellbookAction.label}
            onPress={spellbookAction.action}
          />
        </View>
      ))}
    </View>
  )
}

export default SpellbookForm
