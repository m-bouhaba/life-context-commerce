import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <img
        src="/images/logo.png"
        alt="Logo"
        className="logo"
      />
          {/* <p>
            Shop smarter by choosing products that match your current life
            situation.
          </p> */}
        </div>

        {/* Links */}
        <div className="footerLinks">
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Life Modes</a></li>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">Wishlist</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow us</h4>
          <div className="social-icons">
            <a href="#"><Instagram /></a>
            <a href="#"><Linkedin /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Facebook /></a>
          </div>
        </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LifeMode Store. All rights reserved.
      </div>
    </footer>
  );
}
