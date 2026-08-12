export type Holding = {
  code: string
  name: string
  category: string
  description: string
  status: 'Developing' | 'In development' | 'Planned'
  mark: string
}

export type Principle = {
  code: string
  title: string
  description: string
}

export const holdings: Holding[] = [
  {
    code: '01',
    name: 'Camelot',
    category: 'Digital systems & growth',
    description: 'The operating company for websites, digital systems, automation and commercial growth services.',
    status: 'Developing',
    mark: 'C',
  },
  {
    code: '02',
    name: 'Lumi Project',
    category: 'Consumer technology',
    description: 'A growing collection of playful digital products and interactive consumer experiences.',
    status: 'In development',
    mark: 'L',
  },
  {
    code: '03',
    name: 'Tephtie',
    category: 'Apparel & lifestyle',
    description: 'An independent clothing and lifestyle brand being developed within the AE group.',
    status: 'In development',
    mark: 'T',
  },
  {
    code: '04',
    name: 'Publishing',
    category: 'Books, media & intellectual property',
    description: 'A publishing company for books and original intellectual property. Brand identity still to be named.',
    status: 'Planned',
    mark: 'P',
  },
]

export const principles: Principle[] = [
  {
    code: '01',
    title: 'Build before boasting',
    description: 'The portfolio should become impressive because the companies become useful — not because the parent site says they are.',
  },
  {
    code: '02',
    title: 'Let each company specialise',
    description: 'Camelot sells digital services. Lumi builds consumer products. Tephtie develops apparel. AE owns the structure, not every customer relationship.',
  },
  {
    code: '03',
    title: 'Keep ownership patient',
    description: 'Projects are developed with a long-term view instead of forcing every idea to monetise in the same way or on the same timetable.',
  },
  {
    code: '04',
    title: 'Compound what works',
    description: 'Shared knowledge, systems, distribution and capital can move between companies when it genuinely improves the outcome.',
  },
]
