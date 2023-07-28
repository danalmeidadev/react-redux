export interface ProductProps {
  id?: string;
	name: string;
	price: string;
	description: string;
	quantity: number;
	image: string;
}

export interface ProductState {
	product: ProductProps[];
	loading: boolean;
}