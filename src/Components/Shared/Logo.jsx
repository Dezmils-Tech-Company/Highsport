import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="inline-flex items-center gap-2">
      <span className="text-2xl font-extrabold tracking-tight text-white">
        HIGH
      </span>
      <span className="text-2xl font-semibold tracking-wide text-yellow-400">
        SPORT
      </span>
    </Link>
  );
};

export default Logo;
