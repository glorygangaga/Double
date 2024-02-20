export interface IModal {
  isModal: boolean,
  setIsModal: (value: boolean) => void
}

export interface IPizza {
  data: TypeState,
  setCounters: (value: TypeCounter) => void,
  counters: TypeCounter,
  cnt: number,
}

export type TypeState = {
  id: number,
  title: string,
  price: number,
  desc: string,
  photo: string
}

export type TypeCounter = {
  cnt1: number,
  cnt2: number
}

export type TypeData = {
  data: TypeState[]
}

export type IBought = TypeState[][];
