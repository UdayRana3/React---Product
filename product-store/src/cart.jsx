function Cart({ cart, onIncrease, onDecrease, onRemove, onBack }) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  return (
    <div className="cart-page">
      <button className="cart-back-btn" onClick={onBack}>
        Go to items
      </button>

      <h1>My Cart</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <div className="cart-quantity">
              <button onClick={() => onDecrease(item.id)}>-</button>

              <span>{item.quantity}</span>

              <button onClick={() => onIncrease(item.id)}>+</button>
            </div>
          </div>

          <button className="remove-btn" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <div className="cart-total">
        <p>
          Total Items: <strong>{totalItems}</strong>
        </p>

        <h2>Total: ₹{totalPrice}</h2>
      </div>
    </div>
  );
}

export default Cart;
