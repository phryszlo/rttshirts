import { Card } from 'react-bootstrap';

function Cart({ cartItems, products }) {
  // console.log(`Cart products = ${JSON.stringify(products[0].name)}`);
  return (
    <div className="cart-component">
      Hello Cart

      {/* { cartItems && cartItems.map((item, index) => { */}
      {products.map((product, index) => {
        return (
          <>
          <img src={product.image} alt="" />
            <h1>
              {product.name}
            </h1>
            <p>{product.price}</p>
            <p>{product.detail}</p>
          </>
        )
      })}
    </div>
  )
}

export default Cart