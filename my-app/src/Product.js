import React from 'react'
import axios from 'axios'
import ProdDisp from './ProdDisp';
import { useEffect, useState } from 'react';

const Product = () => {
      const MY_SERVER = "http://localhost:5000/products"
      const [prods, setprods] = useState([])
      useEffect(() => {
        axios.get(MY_SERVER).then((response) => setprods(response.data))
        // console.table(prods);
      }, [])

      return (
      <div>
      product amount:{prods.length}
      <hr />
      {prods.map((prod, ind) => <ProdDisp key={ind} prod={prod} ind={ind}></ProdDisp>)}
    </div>
  )
}

export default Product