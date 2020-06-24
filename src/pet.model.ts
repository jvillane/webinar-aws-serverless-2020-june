export type Species = 'Dog' | 'Cat' | 'Bird' | 'Ferret';

export interface Pet {
  name: string
  species: Species
  breed?: string
}
