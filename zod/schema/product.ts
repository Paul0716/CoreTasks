import { z } from 'zod';

export const ProductSchema = z.object({
  name: z.string().max(5),
  product_id: z.number(),
  price: z.number(),
  regular_price: z.number(),
  sale_price: z.number(),
});
export const ProductsSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
export type Products = z.infer<typeof ProductsSchema>;
