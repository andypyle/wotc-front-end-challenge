import { arrayToObj } from '@/helpers'
import type { Talent, TalentTree } from '@/pages/api/talents'
import { create } from 'zustand'

type TalentStore = {
  talentsData: TalentTree
  talentsDataObject: { [key: string]: Talent }
  selectTalent: (talent: Talent) => void
  unselectTalent: (talent: Talent) => void
  selectedTalents: Talent[]
  loading: boolean
  importTalents: (talents: number[]) => void
  resetTalents: () => void
  fetchTalents: () => void
  maxSelectedTalents: number
}

export const useTalentStore = create<TalentStore>((set) => ({
  talentsData: {},
  talentsDataObject: {},
  loading: false,
  fetchTalents: async () => {
    set({ loading: true })
    const response = await fetch('/api/talents')
    const data = await response.json()
    const flatData = Object.values(data).flat()
    console.log(Object.values(data).flat())
    set({
      talentsData: data,
      talentsDataObject: arrayToObj<Talent>(flatData as Talent[], 'id'),
      loading: false,
    })
  },
  selectTalent: (talent: Talent) =>
    set((state: TalentStore) => {
      // Only select a talent if we have points available.
      return state.selectedTalents.length < state.maxSelectedTalents &&
        !state.selectedTalents.map((t) => t.id).includes(talent.id)
        ? { selectedTalents: [...state.selectedTalents, talent] }
        : {}
    }),
  unselectTalent: (talent: Talent) =>
    // If the talent is already selected, we should be able to unselect it.
    // Also to note, we shouldn't be able to unselect a talent that breaks
    // the requirements of another one.
    set((state: TalentStore): any => {
      if (
        state.selectedTalents.map((t) => t.id).includes(talent.id) &&
        !state.selectedTalents.find((t) => t.requirements.includes(talent.id))
      ) {
        return {
          selectedTalents: state.selectedTalents.filter(
            (t) => t.id !== talent.id
          ),
        }
      }
    }),
  importTalents: (talents: number[]) => {
    set(() => ({ selectedTalents: [] }))
    return set((state: TalentStore) => {
      return { selectedTalents: talents.map((t) => state.talentsDataObject[t]) }
    })
  },
  resetTalents: () => (set: any) => set(() => ({ selectedTalents: [] })),
  selectedTalents: [],
  maxSelectedTalents: 6,
}))
