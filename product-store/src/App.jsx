import { useState } from "react";
import { useEffect } from "react";
import items from "./items";
import Contact from "./Contactus";
import About from "./Aboutus";
import Header from "./Header";
import ProductList from "./productlisting";
import ProductDetails from "./productdetails";
import Cart from "./cart";
import Footer from "./footer";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [showCart, setShowCart] = useState(false);

  const [page, setPage] = useState("home");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen">
      <Header
        cartCount={totalItems}
        onCartClick={() => {
          setShowCart(true);
          setSelectedProduct(null);
          setPage("home");
        }}
      />

      {page === "contact" ? (
        <Contact onBack={() => setPage("home")} />
      ) : page === "about" ? (
        <About onBack={() => setPage("home")} />
      ) : showCart ? (
        <Cart
          cart={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onBack={() => setShowCart(false)}
        />
      ) : selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          cart={cart}
        />
      ) : (
        <ProductList
          products={items}
          onViewDetails={setSelectedProduct}
          onAddToCart={addToCart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          cart={cart}
        />
      )}

      <Footer
        onContact={() => {
          setPage("contact");
          setShowCart(false);
          setSelectedProduct(null);
        }}
        onAbout={() => {
          setPage("about");
          setShowCart(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
}

export default App;
