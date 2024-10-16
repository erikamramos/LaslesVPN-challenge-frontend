export default function Header() {
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#help', label: 'Help' },
  ];

  return (
    <header className="header">
      <div className="logo-content">
        <img
          className="logo-content__logo"
          src="/images/logo.png"
          alt="LaslesVPN logo"
        />
        <h1 className="logo-content__name">
          Lasles<span className="logo-content__name--vpn">VPN</span>
        </h1>
      </div>
      <nav className="links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="link">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="button">
        <a href="#" className="button__sign-in">
          Sign In
        </a>
        <a href="#" className="button__sign-up">
          Sign Up
        </a>
      </div>
      <label className="burger-menu">
        <div className="burger-menu__bar"></div>
        <div className="burger-menu__bar"></div>
        <div className="burger-menu__bar"></div>
      </label>
      <input id="menu" type="checkbox" className="burger-menu__checkbox" />
    </header>
  );
}
