import Cart from "../components/Cart"
import Summary from "../components/Summary";

function CartPage({ cartItems, products }) {
  return (
    <div className="cart-page">
      <Cart cartItems={cartItems} products={products} />
      <Summary />
    </div>
  )
}

export default CartPage