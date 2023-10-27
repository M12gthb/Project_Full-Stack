import { z } from "zod";

export const EditUserSchema = z
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
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"],
  });

export type EditUserData = z.infer<typeof EditUserSchema>;
