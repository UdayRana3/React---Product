import { Button } from "@/components/ui/button";

function Footer({ onAbout, onContact }) {
  return (
    <footer className="footer">
      <Button  onClick={onAbout}>
        About Us
      </Button>

      <Button onClick={onContact}>
        Contact Us
      </Button>
    </footer>
  );
}

export default Footer;
