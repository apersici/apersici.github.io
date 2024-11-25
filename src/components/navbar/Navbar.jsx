import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/andrea-persici/">
            <img src="public/linkedin.png" alt="" />
          </a>
          <a href="https://orcid.org/my-orcid?orcid=0000-0003-3286-2775">
            <img src="public/orcid.png" alt="" />
          </a>
          <a href="https://www.researchgate.net/profile/Andrea-Persici">
            <img src="public/resgate.png" alt="" />
          </a>
          <a href="https://github.com/apersici">
            <img src="public/github.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
