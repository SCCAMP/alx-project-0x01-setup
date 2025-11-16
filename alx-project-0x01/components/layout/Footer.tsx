const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-auto">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Daily Contents. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
