import { Card, Button } from 'react-bootstrap';

function Cart({ cartItems, products }) {
  // console.log(`Cart products = ${JSON.stringify(products[0].name)}`);
  return (
    <div className="cart-component">
      <h2 className="cart-title">In your cart</h2>
      {/* { cartItems && cartItems.map((item, index) => { */}
      {products.map((product, index) => {
        return (
          <>
            <Card className="bs-card">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                {product.detail}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            {/* <img src={product.image} alt="" />
            <h1>
              {product.name}
            </h1>
            <p>{product.price}</p>
            <p>{product.detail}</p> */}
          </>
        )
      })}
    </div>
  )
}

export default Cart