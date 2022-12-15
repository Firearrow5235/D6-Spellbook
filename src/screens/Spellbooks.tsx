import { StyleSheet, View } from "react-native"
import { containers } from "../styles/containers"

const styles = StyleSheet.create({
  entry: {
    width: '100%',
    color: '#000'
  }
})

const Spellbooks = () => {
  return (
    <View style={containers.page}>
      <View style={containers.content}>
        <View style={styles.entry}>
          New Spellbook
        </View>
        <View style={styles.entry}>
          Add Spellbook
        </View>
      </View>
    </View>
  )
}

export default Spellbooks