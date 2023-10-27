export interface IImages {
  id: string;
  image_url: string;
  anouncementId: string;
}

export interface IAnouncement {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  mileage: number;
  color: string;
  priceTabel: number;
  price: number;
  description: string;
  publish: boolean;
  cover_img: string;
  userId: string;
  images: Array<IImages>;
  coments: Array<IComments>;
}

export interface IAnouncementCreate {
  brand: string;
  model: string;
  year: number;
  fuel: string;
  mileage: number;
  color: string;
  priceTabel: number;
  price: number;
  description: string;
  publish: boolean;
  cover_img: string;
  userId: string;
  images: Array<IImages>;
}
export interface IAnouncementUpdate {
  brand?: string;
  model?: string;
  year?: number;
  fuel?: string;
  mileage?: number;
  color?: string;
  priceTabel?: number;
  price?: number;
  description?: string;
  publish?: boolean;
  cover_img?: string;
  images: Array<IImagesUpdate>;
}

interface IImagesUpdate {
  image_url: string;
}

export interface IAnouncementWithUser {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  mileage: number;
  color: string;
  priceTabel: number;
  price: number;
  description: string;
  publish: boolean;
  cover_img: string;
  userId: string;
  images: Array<IImages>;
  user: userNoId;
}

export interface IUsers {
  data?: any;
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  cell: string;
  birthdate: string;
  description: string;
  type: string;
  address: Array<IAddress>;
}

type userNoId = Omit<IUsers, "id">;

export interface IAddress {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
  userId: string;
}

export interface ICommentsUsers {
  userAbbr?: any;
  id: string;
  comment: string;
  commentDate: string;
  userId: string;
  anouncementId: string;
  user: IUsers;
}

export interface IComments {
  id: string;
  comment: string;
  commentDate: string;
  userId: string;
  anouncementId: string;
}
