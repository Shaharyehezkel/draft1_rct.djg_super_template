import React from 'react'

const ProdDisp = (props) => {
    console.log(props);
  return (
    <div>Your products 
        <br/>
        item number: {props.ind +1}<br/>
        Desc:{props.prod.desc}<br/>
        Price:{props.prod.price}
        <hr/>
    </div>
  )
}

export default ProdDisp