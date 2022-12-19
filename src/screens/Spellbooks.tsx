import { NavigationProp, TypedNavigator } from "@react-navigation/native"
import { Button, StyleSheet, View } from "react-native"
import { containers } from "../styles/containers"
import { ScreenProps } from "../../types"
import { FC } from "react"

const styles = StyleSheet.create({
  entry: {
    width: '100%',
    color: '#000'
  }
})

const Spellbooks: FC<ScreenProps> = ({navigation}) => {

  return (
    <View style={containers.page}>
      <View style={containers.content}>
        <View style={styles.entry}>
          New Spellbook
        </View>
        <View style={styles.entry}>
          <Button title='Add Spellbook' onPress={() => {navigation.navigate('Spell Calculator')}} />
        </View>
      </View>
    </View>
  )
}

export default Spellbooks