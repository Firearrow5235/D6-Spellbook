import { FC, useState } from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native'

type InputProps = {
  value: string
  setValue: (newValue: string) => void
  fieldAlignment?: "left" | "auto" | "center" | "right" | "justify" | undefined
  fieldMaxWidth?: string
  keyboardType?: KeyboardTypeOptions
  label?: string
  labelHidden?: boolean
  numbersOnly?: boolean
  placeholder?: string
}

const Input: FC<InputProps> = ({ value, setValue, fieldAlignment = 'left', fieldMaxWidth = '100%', keyboardType = 'default', label = '', labelHidden = false, numbersOnly = false, placeholder = '' }) => {
  const [localValue, setLocalValue] = useState(value)

  const handleBlur = () => {
    if (localValue === '')
      setValue(
        '0'
      )
    else
      setValue(localValue)
  }

  const handleChange = (newValue: string) => {
    setLocalValue(numbersOnly ? newValue.replace(/[^0-9]/g, '') : newValue) 
  }

  return (
    <View style={styles.container}>
      {!labelHidden && <Text style={styles.label}>{label}</Text>}
      <TextInput style={{ ...styles.input, maxWidth: fieldMaxWidth, textAlign: fieldAlignment, color: localValue.length > 0 ? '#000' : '#aaa' }} keyboardType={keyboardType} onChangeText={handleChange} onBlur={handleBlur} value={localValue} placeholder={placeholder} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    paddingBottom: '8px'
  },
  label: {
    flex: 1,
  },
  input: {
    padding: '4px',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#aaa',
    width: '100%'
  }
})