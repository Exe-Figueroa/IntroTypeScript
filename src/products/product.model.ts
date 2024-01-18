export type Sizes = 'L' | 'M' | 'XL' | 'XXL';

export type Product = {
  title: string,
  stock: number,
  size?: Sizes
};
