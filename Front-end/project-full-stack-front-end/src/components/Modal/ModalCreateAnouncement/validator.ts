import { z } from "zod";

export const CreateAnouncementSchema = z.object({
  brand: z.string().nonempty("Digite uma marca!"),
  model: z.string().nonempty("Digite uma modelo!"),
  year: z.number().min(4, "Deve ser passado o ano!"),
  fuel: z
    .string()
    .min(6, "Dever ser etanol ou gasolina!")
    .max(8, "Dever ser etanol ou gasolina!"),
  mileage: z.number().min(1, "Deve ser passado a quilometragem!"),
  color: z.string().min(1, "Deve ser passado a cor do veículo!"),
  priceTabel: z.number().min(4, "Deve ser passado o preço!"),
  description: z.string().min(1, "Descrição obrigatória!"),
  cover_img: z.string().min(1, "Deve ser passado a imagem de capa!"),
  price: z.number().min(4, "Deve ser passado o preço!"),
});

export type CreateAnouncementData = z.infer<typeof CreateAnouncementSchema>;
