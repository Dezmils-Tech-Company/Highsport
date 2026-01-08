import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="inline-flex items-center gap-2">
      <span className="text-2xl font-extrabold tracking-tight text-white">
        SCORE
      </span>
      <span className="text-2xl font-bold tracking-wide text-green-500">
        YETU
      </span>
    </Link>
  );
};

export default Logo;
