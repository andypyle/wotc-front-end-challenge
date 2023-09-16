import type { NextApiRequest, NextApiResponse } from 'next'

export enum TalentNames {
  CHEVRON = 'Chevron',
  SILVERWARE = 'Silverware',
  CAKE = 'Cake',
  CROWN = 'Crown',
  SHIP = 'Ship',
  SCUBA = 'Scuba',
  BOLT = 'Bolt',
  SKULL = 'Skull',
}

export enum TalentPathNames {
  TALENT_PATH_1 = 'Talent Path 1',
  TALENT_PATH_2 = 'Talent Path 2',
}

export type Talent = {
  id: number
  name: TalentNames
  requirements: number[]
  spriteOn: [number, number]
  spriteOff: [number, number]
}

export type TalentPath = Talent[]

export type TalentTree = { [key: string]: TalentPath }

export const talentsData: TalentTree = {
  [TalentPathNames.TALENT_PATH_1]: [
    {
      id: 1,
      name: TalentNames.CHEVRON,
      requirements: [],
      spriteOn: [0, 0],
      spriteOff: [0, -50],
    },
    {
      id: 2,
      name: TalentNames.SILVERWARE,
      requirements: [1],
      spriteOn: [-50, 0],
      spriteOff: [-50, -50],
    },
    {
      id: 3,
      name: TalentNames.CAKE,
      requirements: [1, 2],
      spriteOn: [-100, 0],
      spriteOff: [-100, -50],
    },
    {
      id: 4,
      name: TalentNames.CROWN,
      requirements: [1, 2, 3],
      spriteOn: [-150, 0],
      spriteOff: [-150, -50],
    },
  ],
  [TalentPathNames.TALENT_PATH_2]: [
    {
      id: 5,
      name: TalentNames.SHIP,
      requirements: [],
      spriteOn: [-200, 0],
      spriteOff: [-200, -50],
    },
    {
      id: 6,
      name: TalentNames.SCUBA,
      requirements: [5],
      spriteOn: [-250, 0],
      spriteOff: [-250, -50],
    },
    {
      id: 7,
      name: TalentNames.BOLT,
      requirements: [5, 6],
      spriteOn: [-300, 0],
      spriteOff: [-300, -50],
    },
    {
      id: 8,
      name: TalentNames.SKULL,
      requirements: [5, 6, 7],
      spriteOn: [-350, 0],
      spriteOff: [-350, -50],
    },
  ],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TalentTree>
) {
  // Mocking what it would be like to fetch talents from a real API.
  setTimeout(() => {
    res.status(200).json(talentsData)
  }, 1750)
}
