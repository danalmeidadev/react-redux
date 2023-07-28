import React, { useCallback, useEffect } from 'react';
import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductCard';
import { useRedux } from '../../hooks';
import { productRequest } from '../../store/actions';

export default function Home(){
  const {dispatch, appSelector} = useRedux();

  const { products } = appSelector((state) => ({
    products: state.Product.product,
  }));

  const getProducts = useCallback(() => {
    dispatch(productRequest());
  }, [])

  useEffect(() => {
    getProducts();
  }, [])


  return(
    <>
      <Header />
      <ProductCard products={products}  />
    </>
  )
}


