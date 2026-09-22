import { Button } from "@/components/ui/button";

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <h2>My Store</h2>

      <Button onClick={onCartClick}>
        Show Cart ({cartCount})
      </Button>
    </header>
  );
}

export default Header;