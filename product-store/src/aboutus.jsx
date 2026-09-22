function About({ onBack }) {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About My Store</h1>

        <p>
          Welcome to My Store, a simple and user-friendly online shopping
          platform designed to make browsing and managing products easy.
        </p>

        <h2>What We Offer</h2>

        <ul>
          <li>Easy product browsing</li>
          <li>Detailed product information</li>
          <li>Simple shopping cart management</li>
          <li>Quantity control for products</li>
          <li>Responsive and user-friendly design</li>
        </ul>

        <h2>Our Goal</h2>

        <p>
          Our goal is to provide a clean and simple shopping experience where
          users can easily find products and manage their cart.
        </p>

        <button onClick={onBack}>Back to Items</button>
      </div>
    </div>
  );
}

export default About;
