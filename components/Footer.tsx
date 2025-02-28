const Footer = () => {
  return (
    <footer className="dark:bg-accent bg-foreground/40 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo or Brand Name */}
        <div className="text-lg font-semibold">Orgoto Tours</div>

        <div className="flex flex-row flex-wrap space-x-6">
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="flex flex-col">
            <div>Contact Us</div>
            <div>+91-12345678</div>
            <div>abc@abc.com</div>
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm mt-4 flex flex-col">
        <p>© {new Date().getFullYear()} Curion Tech. All rights reserved.</p>
        <div>Follow us on: </div>
      </div>
    </footer>
  );
};

export default Footer;

