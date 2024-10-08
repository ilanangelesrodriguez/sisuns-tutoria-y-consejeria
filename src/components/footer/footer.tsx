import { Link } from "@nextui-org/link";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <Link
        className="flex items-center gap-1 text-current"
        href="/"
        title="inicio"
      >
        <span className="text-default-600">Desarrollado por </span>
        <p className="text-primary">SISUNS</p>
      </Link>
    </footer>
  );
};

export default Footer;
