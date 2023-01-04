import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Spell, Spellbook } from '../../types'

export const useSpells = (spellbook: Spellbook): [Spell[] | null] => {
  const [spells, setSpells] = useState<Spell[] | null>(null)

  const getSpells = async (): Promise<void> => {
    const spellValues = await AsyncStorage.multiGet(spellbook.spells)

    const spells: Spell[] = spellValues.flatMap((keyValuePair) =>
      keyValuePair[1] !== null ? (JSON.parse(keyValuePair[1]) as Spell) : []
    )

    setSpells(spells)
  }

  useEffect(() => {
    getSpells()
  }, [spellbook])

  return [spells]
}
