
function ProductList({
  products,
  onViewDetails,
  cart,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="product-list">
      {products.map((product) => {
        const cartItem = cart.find(
          (item) => item.id === product.id
        );

        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <div
            key={product.id}
            className="product-card"
          >
            <div className="product-card-content">
              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>₹{product.price}</p>
            </div>

            <div className="product-card-footer">
              <button
                className="view-details-btn"
                onClick={() => onViewDetails(product)}
              >
                View Details
              </button>

              {quantity > 0 && (
                <div className="quantity-box">
                  <button
                    size="icon"
                    variant="outline"
                    onClick={() => onDecrease(product.id)}
                  >
                    -
                  </button>

                  <span>{quantity}</span>

                  <button
                    size="icon"
                    variant="outline"
                    onClick={() => onIncrease(product.id)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;

