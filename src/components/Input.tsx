import { FC, useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

type InputProps = {
  label: string
  value: string
  setValue: (newValue: string) => void
}

const Input: FC<InputProps> = ({ label, value, setValue }) => {
  const [localValue, setLocalValue] = useState(value)

  const handleBlur = () => {
    if (localValue === '')
      setValue(
        '0'
      )
    else
      setValue(localValue)
  }

  const handleChange = (newValue: string) => { setLocalValue(newValue.replace(/[^0-9]/g, '')) }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={handleChange} onBlur={handleBlur} value={localValue} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    paddingTop: '4px',
    paddingBottom: '4px'
  },
  label: {
    flex: 1,
  },
  input: {
    maxWidth: '40px',
    padding: '4px',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#aaa',
    textAlign: 'center'
  }
})