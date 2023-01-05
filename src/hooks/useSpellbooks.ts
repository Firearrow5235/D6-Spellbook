import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Spellbook } from '../../types'

export const useSpellbooks = (): [spellbooks: Spellbook[] | null] => {
  const [spellbooks, setSpellbooks] = useState<Spellbook[] | null>(null)

  const getSpellbooks = async (): Promise<void> => {
    const registryJson = await AsyncStorage.getItem('Spellbooks')

    if (registryJson != null) {
      const registry: string[] = JSON.parse(registryJson)
      const spellbooks: Spellbook[] = await AsyncStorage.multiGet(
        registry
      ).then((keyValuePairs) =>
        keyValuePairs.flatMap((entry) =>
          entry[1] !== null ? (JSON.parse(entry[1]) as Spellbook) : []
        )
      )

      setSpellbooks(spellbooks)
    } else setSpellbooks(null)
  }

  useEffect(() => {
    getSpellbooks()
  }, [])

  return [spellbooks]
}
