import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().max(160, "O nome é obrigatório!"),
    email: z.string().email("Deve ser um e-mail!"),
    password: z.string().min(8, "Senha é obrigatória!"),
    confirm: z.string({ required_error: "Campo obrigatório!" }),
    cpf: z
      .string()
      .min(10, "Dever ser um cpf!")
      .max(14, "Dever ser um cpf!")
      .regex(/(?=.*?[0-9])/, "Dever ser um cpf!"),
    cell: z
      .string()
      .min(6, "Deve ser um número válido!")
      .max(14, "Deve ser um número válido!")
      .regex(/(?=.*?[0-9])/, "Deve ser um número válido!"),
    birthdate: z
      .string()
      .min(8, "Deve ser uma data válida!")
      .max(10, "Deve ser uma data válida!")
      .regex(/(?=.*?[0-9])/, "Deve ser uma data válida!"),
    description: z.string().min(1, "A descrição é obrigatória!"),
    cep: z
      .string()
      .max(9, "O cep deve está no formato correto!")
      .regex(/(?=.*?[\W])/, "O cep deve está no formato correto!"),
    state: z
      .string()
      .max(30, "O estádo é obrigatório!")
      .min(2, "O estádo é obrigatório!"),
    city: z.string().min(2, "A cidade é obrigatória!"),
    street: z.string().min(2, "A rua é obrigatório!"),
    number: z
      .string()
      .min(1, "O número é obrigatório!")
      .regex(/(?=.*?[0-9])/, "Deve ser um número válido!"),
    complement: z.string(),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"],
  });

export type RegisterData = z.infer<typeof RegisterSchema>;
