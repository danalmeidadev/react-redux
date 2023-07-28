export interface ProductProps {
  id?: string;
	name: string;
	price: string;
	description: string;
	image: string;
	quantity: number
}

export interface CartItem {
  product: ProductProps;
  quantity: number;
}

export interface CartState {
	cart: CartItem[]
	failedStockCheck: number[];
}