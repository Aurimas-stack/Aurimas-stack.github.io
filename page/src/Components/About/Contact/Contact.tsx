
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_cont">
      <a href="https://github.com/Aurimas-stack" target="_blank">
           <FontAwesomeIcon icon={faCode} /> Aurimas-stack
        </a>
      <a href="https://www.linkedin.com/in/aurimas-%C5%BE-b09b0221a/" target="_blank">LinkedIn</a>
      <a href="mailto:aurimas.stack.z@gmail.com">Email</a>
    </div>
  );
};
export default Contact;
