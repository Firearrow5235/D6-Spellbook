import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

export const useRegistry = (): [registry: string[] | null] => {
  const [registry, setRegistry] = useState<string[] | null>(null)

  const getRegistry = async (): Promise<void> => {
    const registry: string[] = await AsyncStorage.getItem('Spellbooks').then(
      (registry) => (registry ? JSON.parse(registry) : [])
    )

    setRegistry(registry)
  }

  useEffect(() => {
    getRegistry()
  }, [])

  return [registry]
}
