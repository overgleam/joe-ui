const Footer = () => {
  return (
    <footer className="bottom-0 w-full z-50 mt-3 py-3 container md:shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="text-center text-muted-foreground dark:text-white">
        &copy; {new Date().getFullYear()} Joseph Alforque. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
