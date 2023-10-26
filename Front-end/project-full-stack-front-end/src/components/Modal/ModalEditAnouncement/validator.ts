import { z } from "zod";

export const EditAnouncementSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.number().min(4, "Deve ser passado o ano!"),
  fuel: z
    .string()
    .min(6, "Dever ser etanol ou gasolina!")
    .max(8, "Dever ser etanol ou gasolina!"),
  mileage: z.number().min(1, "Deve ser passado a quilometragem"),
  color: z.string().optional(),
  priceTabel: z.number().min(4, "Deve ser passado o preço!"),
  description: z.string().min(1, "Descrição obrigatória!"),
  cover_img: z.string().optional(),
  price: z.number().min(4, "Deve ser passado o preço!"),
});

export type EditAnouncementData = z.infer<typeof EditAnouncementSchema>;
