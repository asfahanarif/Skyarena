import "./ContactFormStyles.css";
import { Link } from "react-router-dom";
function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <Link to="/" className="button-link">
          <button>Send Message</button>
        </Link>
      </form>
    </div>
  );
}

export default ContactForm;
