import { Text, View } from 'react-native'
import { useSpellbooks } from '../hooks/useSpellbooks'
import SpellbookEntry from './SpellbookEntry'

const SpellbookEntries = () => {
  const [spellbooks] = useSpellbooks()

  return (
    <View>
      {!spellbooks && <Text>Loading...</Text>}
      {spellbooks &&
        spellbooks.length > 0 &&
        spellbooks.map((spellbook, index) => {
          return <SpellbookEntry key={index} spellbook={spellbook} />
        })}
    </View>
  )
}

export default SpellbookEntries
