import { NavigationProp, TypedNavigator } from "@react-navigation/native"
import { Button, StyleSheet, View } from "react-native"
import { containers } from "../styles/containers"
import { RouteParams } from "../../types"
import { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"

type SpellbooksProps = StackScreenProps<RouteParams, 'Spellbooks'>

const styles = StyleSheet.create({
  entry: {
    width: '100%',
    color: '#000'
  }
})

const Spellbooks: FC<SpellbooksProps> = ({navigation}) => {

  return (
    <View style={containers.page}>
      <View style={containers.content}>
        <View style={styles.entry}>
          <Button title='New Spellbook' onPress={() => {navigation.navigate('Create a Spellbook')}} />
        </View>
      </View>
    </View>
  )
}

export default Spellbooks