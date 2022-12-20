import { StackScreenProps } from "@react-navigation/stack"
import { FC, useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"
import { RouteParams } from "../../types"
import Input from "../components/Input"
import { containers } from "../styles/containers"

type SpellbookProps = StackScreenProps<RouteParams, 'Create a Spellbook'>

const styles = StyleSheet.create({
  input: {
    padding: '4px',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#aaa',
    marginBottom: '8px'
  }
})

const Spellbook: FC<SpellbookProps> = () => {
  const [spellbook, setSpellbook] = useState({
    Name: '',
    Character: '',
    "Core Attribute": '',
  })

  const handleChange = (key: string) => (newValue: string) => {
    setSpellbook({
      ...spellbook,
      [key]: newValue
    })
  }

  const createSpellbook = () => {
    return
  }

  return (
    <View style={containers.page}>
      <View style={containers.content}>
        {
          Object.entries(spellbook).map(([key, value]) => (
            <Input value={value} setValue={handleChange(key)} placeholder={key} labelHidden />
          ))
        }
        <Button title='Create' onPress={createSpellbook} />
      </View>
    </View>
  )
}

export default Spellbook