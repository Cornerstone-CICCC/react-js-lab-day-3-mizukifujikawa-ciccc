import { Link } from 'react-router-dom';
import { memo } from "react"

type Props = { firstname: string; }

const Header = memo(({ firstname }: Props) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        </nav>
        <div className="text-white font-medium">{firstname}</div>
      </div>
    </header>
  );
})

export default Header;