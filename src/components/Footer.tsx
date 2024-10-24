const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full z-50 p-4 bg-transparent">
      <div className="container mx-auto text-center text-white">
        &copy; {new Date().getFullYear()} Joseph Alforque. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
