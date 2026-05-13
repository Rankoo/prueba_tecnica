import { useEffect, useState } from 'react'
import type { Product } from '../types/product';
import { api } from '../api/api';
import './checkout.css'

export const Checkout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(()=>{
      const getProducts = async () => {
        const params = new URLSearchParams()
        params.append('limit', '3')
        const {data} = await api.get(`/products?${params}`)
        console.log({data})
        setProducts([...data])
      }
      getProducts()
    },[])
  
  return (
    <>
        <h1>Checkout</h1>
        <p>Completa tu compra de forma segura</p>

        <div>
          <section>
            <h2>Información de Pago</h2>
            <p>Ingresa los datos de tu tarjeta</p>
            <form action="">
              
            </form>
          </section>
          <section>
            <div>
              <h2>Resumen del Pedido</h2>
              <p>3 productos</p>
            </div>
            
            {products.map(({id, title, price, rating}) => {
              return(<div className='product_car' key={id}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="product_car_icon icon icon-tabler icons-tabler-outline icon-tabler-package"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>
                <div className='product_car_title'>
                  <h3>{title}</h3>
                  <p>{rating.count}</p>
                </div>
                <h2>{price}</h2>
              </div>)
            })}  
          </section>  
        </div>  
      </>
  )
}
