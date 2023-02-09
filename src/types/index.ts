export type RouteParams = {
  Spellbooks: { registry: string[] }
  Spellbook: { spellbook: Spellbook }
  'Create a spellbook': undefined
  'Edit spellbook': { spellbook: Spellbook }
  'Create a spell': { spellbook: Spellbook }
  'Edit spell': { spellbook: Spellbook; spell: Spell }
}

export type Spellbook = {
  id: string
  name: string
  character: string
  coreAttribute: string
  spells: string[]
  createdAt: string
  updatedAt: string
}

export type SpellbookInput = {
  Name: string
  Character: string
  'Core Attribute': string
}

export type SpellInput = {
  Name: string
  Skill: string
  'Spell Total': string
  'Target Number': string
  Effect: string
  'Casting Time': string
  Range: string
  Duration: string
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
