export type RouteParams = {
  Spellbooks: undefined
  Spellbook: { spellbook: Spellbook }
  'Create a spellbook': undefined
  'Create a spell': undefined
  'Spell calculator': undefined
}

export type Spellbook = {
  id: string
  name: string
  character: string
  coreAttribute: string
}

export type Spell = {
  id: string
  name: string
  skill: string
  targetNumber: number
  spellTotal: number
  effect: string
  castingTime: string
  range: string
  duration: string
  otherAspects: Aspect[]
}

export type Aspect = {
  name: string
  description: string
}
