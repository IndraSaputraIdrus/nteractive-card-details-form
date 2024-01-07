// place files you want to import through the `$lib` alias in this folder.

import { z } from "zod";

export function formatCreditCardNumber(ccNumber: string) {
  const formattedNumber = ccNumber.replace(/\D/g, ''); // Menghapus semua karakter non-digit
  const regex = /(\d{4})(?=\d)/g; // Mencocokkan setiap 4 digit
  const formattedString = formattedNumber.replace(regex, '$1 '); // Menambahkan spasi setelah setiap 4 digit
  return formattedString;
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Can't be blank" })
    .regex(/^[a-zA-Z\s]+$/, "Wrong format, only letter"),
  number: z.string().min(1, { message: "Can't be blank" })
    .regex(/^[\d\s]+$/, {
      message: "Wrong format, only number"
    }).max(19),
  month: z.string().min(1, { message: "Can't be blank" })
    .regex(/^[\d\s]+$/, {
      message: "Wrong format, only number"
    }).max(2),
  year: z.string().min(1, { message: "Can't be blank" })
    .regex(/^[\d\s]+$/, {
      message: "Wrong format, only number"
    }).max(2),
  cvc: z.string().min(1, { message: "Can't be blank" }).max(3)
    .regex(/^[\d\s]+$/, {
      message: "Wrong format, only number"
    }),
})

export function formValidation(data: { [k: string]: FormDataEntryValue }) {
  const result = formSchema.safeParse(data)
  if (!result.success) {
    const { fieldErrors: errors } = result.error.flatten()
    return { error: true, errors }
  }

  return { error: false, result }
}
