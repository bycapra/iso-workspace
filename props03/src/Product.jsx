import React from 'react'

function Product(props) {
    var urunAdi  = props.urunAdi
  return (
    <div>
      Sıradaki Urun = {urunAdi}
    </div>
  )
}

export default Product
