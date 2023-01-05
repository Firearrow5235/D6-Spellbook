import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Spell, Spellbook } from '../../types'

export const useSpells = (spellbook: Spellbook): [Spell[] | null] => {
  const [spells, setSpells] = useState<Spell[] | null>(null)

  const getSpells = async (): Promise<void> => {
    const spells: Spell[] = await AsyncStorage.multiGet(spellbook.spells).then(
      (keyValuePairs) =>
        keyValuePairs.flatMap((entry) =>
          entry[1] !== null ? (JSON.parse(entry[1]) as Spell) : []
        )
    )

    setSpells(spells)
  }

  useEffect(() => {
    getSpells()
  }, [spellbook])

  return [spells]
}
