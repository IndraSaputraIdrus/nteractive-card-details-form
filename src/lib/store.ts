import { writable } from "svelte/store"

type CardInfo = {
  name: string,
  number: string,
  date: {
    month: string
    year: string
  },
  cvc: string
  completed: boolean
}

export const initialValue = {
  name: "Jane Appleseed",
  number: "0000 0000 0000 0000",
  date: {
    month: "00",
    year: "00",
  },
  cvc: "000",
  completed: false
}

export const cardStore = writable<CardInfo>(initialValue)
