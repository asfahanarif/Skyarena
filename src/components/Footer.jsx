import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <Link to="/" className="logo-foot">
            <h1>Skyarena</h1>
          </Link>

          <p>Choose your favorite destination</p>
        </div>
        <div>
          <a href="https://www.facebook.com/asfahanarif" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/asfahanarif" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/asfahanarif" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/c/asfahanarif" target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <Link to="/">
            <h4>Project</h4>
            Changelog <br />
            Status <br />
            License <br />
            All Versions <br />
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Community</h4>
            GitHub <br />
            Issues <br />
            Project <br />
            Twitter <br />
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Help</h4>
            Support <br />
            Troubleshooting <br />
            Contact Us <br />
          </Link>
        </div>
      </div>
      <div className="copyright-footer">
        <div>
          <h5 className="copyright">© 2024 skyarena — Powered by AxN</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
