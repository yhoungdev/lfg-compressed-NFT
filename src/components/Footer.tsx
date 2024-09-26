import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Link
            to="/about"
            className="text-accent hover:text-accent-dark font-semibold"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
