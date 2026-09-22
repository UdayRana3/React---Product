
function ProductDetails({
  product,
  onBack,
  onAddToCart,
  onIncrease,
  onDecrease,
  cart,
}) {
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product-details-page">
      <button className="back-btn" onClick={onBack}>
        Back
      </button>

      <div className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <h1>{product.name}</h1>

          <div className="details-price">₹{product.price}</div>

          <h3>About this item</h3>

          <p className="description">{product.description}</p>

          {quantity === 0 ? (
            <button
              className="add-cart-btn"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          ) : (
            <div className="details-quantity">
              <button onClick={() => onDecrease(product.id)}>-</button>

              <span>{quantity}</span>

              <button onClick={() => onIncrease(product.id)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
