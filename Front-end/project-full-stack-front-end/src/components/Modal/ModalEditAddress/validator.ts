import { z } from "zod";

export const EditAddressSchema = z.object({
  cep: z
    .string()
    .max(9, "O cep deve está no formato correto!")
    .regex(/(?=.*?[\W])/, "O cep deve está no formato correto!")
    .optional(),
  state: z
    .string()
    .max(30, "O estádo é obrigatório!")
    .min(2, "O estádo é obrigatório!")
    .optional(),
  city: z.string().min(2, "A cidade é obrigatória!").optional(),
  street: z.string().min(2, "A rua é obrigatório!").optional(),
  number: z
    .string()
    .min(1, "O número é obrigatório!")
    .regex(/(?=.*?[0-9])/, "Deve ser um número válido!")
    .optional(),
  complement: z.string().optional(),
});

export type EditAddressData = z.infer<typeof EditAddressSchema>;
