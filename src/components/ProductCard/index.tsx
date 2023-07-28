import React, {useCallback} from 'react';
import { ProductProps, ProductPropsData } from './types';
import { Row } from 'react-bootstrap';
import { formatPrice } from '../../utils/formatPrice';
import { useRedux } from '../../hooks';
import { addProductToCartRequest } from '../../store/actions';

export function ProductCard({ products }: ProductPropsData) {
  const {dispatch} = useRedux()

  const handleAddProductToCart = useCallback((product: ProductProps ) => {
    console.log('product', product)
    dispatch(addProductToCartRequest(product));
  }, [dispatch]);
  
  return (
    <Row>
      {(products || []).map((item) => {
        return (
          <div
            className="card"
            style={{
              width: '15rem',
              maxWidth: '300px',
              margin: '10px',
              backgroundColor: '#ffffff',
            }}
          >
            <img
              src={item.image}
              className="card-img-top"
              alt="Nome do produto"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'contain',
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{`Preço: ${formatPrice(Number(item.price))}`}</p>
              <button className="btn btn-primary" onClick={() => handleAddProductToCart(item)}>Adicionar ao carrinho</button>
            </div>
          </div>
        )
      })}
    </Row>
  )
}