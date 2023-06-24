import "./index.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                Logo
            </div>
            <nav className="header__nav">
                <ul className="header_menu">
                    <li className="header_link">1 страница</li>
                    <li className="header_link">2 страница</li>
                    <li className="header_link">3 страница</li>
                    <li className="header_link">4 страница</li>
                </ul>
            </nav>
        </header>
    )
}