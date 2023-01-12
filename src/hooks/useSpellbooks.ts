import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Spellbook } from '../types'

export const useSpellbooks = (
  registry: string[]
): [spellbooks: Spellbook[] | null] => {
  const [spellbooks, setSpellbooks] = useState<Spellbook[] | null>(null)

  const getSpellbooks = async (): Promise<void> => {
    const spellbooks: Spellbook[] = await AsyncStorage.multiGet(registry).then(
      (keyValuePairs) =>
        keyValuePairs
          .flatMap((entry) =>
            entry[1] !== null ? (JSON.parse(entry[1]) as Spellbook) : []
          )
          .sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
    )

    setSpellbooks(spellbooks)
  }

  useEffect(() => {
    getSpellbooks()
  }, [registry])

  return [spellbooks]
}
