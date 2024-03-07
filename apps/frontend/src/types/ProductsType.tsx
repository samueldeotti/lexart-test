// export type ProductsType = {
//   name: string,
//   brand?: string,
//   model?: string,
//   price?: number,
//   color?: string,
//   details?: {
//     brand: string,
//     model: string,
//     color: string
//   },
//   data?: {
//     price: number,
//     color: string
//   }[]
// };

export type ProductsType = {
  id?: number
  name: string,
  brand: string,
  model: string,
  price: number,
  color: string
};

export type DataProductType = {
  price: number | '',
  color: string
};

export type FormProductType = {
  id?: number,
  name: string,
  brand: string,
  model: string,
  data: DataProductType[]
};
