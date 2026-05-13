import { useEffect, useState } from 'react'
import './App.css'
import type { Product } from './types/product';
import { api } from './api/api';

function App() {
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
      <p>holaa</p>  
      {products.map(({id, title, price, rating}) => {
        return(<div key={id}>
          <h1>{title}</h1>
          <h2>{price}</h2>
          <p>{rating.count}</p>
        </div>)
      })}  
    </>
  )
}

export default App
