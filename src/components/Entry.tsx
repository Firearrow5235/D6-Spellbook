import React, { FC } from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: '8px',
    backgroundColor: '#dddddd',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: '8px',
  },
})

type EntryProps = {
  onPress: () => void
}

const Entry: FC<React.PropsWithChildren<EntryProps>> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        onPress()
      }}
    >
      <View style={styles.container}>{children}</View>
    </TouchableHighlight>
  )
}

export default Entry
