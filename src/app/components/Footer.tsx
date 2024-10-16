export default function Footer() {
  const socialIcons = [
    { src: 'images/socials/facebook.png', alt: 'Facebook icon' },
    { src: 'images/socials/whatsapp.png', alt: 'WhatsApp icon' },
    { src: 'images/socials/youtube.png', alt: 'YouTube icon' },
  ];

  const sections = [
    {
      heading: 'Product',
      links: [
        'Download',
        'Pricing',
        'Locations',
        'Server',
        'Countries',
        'Blog',
      ],
    },
    {
      heading: 'Engage',
      links: [
        'LaslesVPN?',
        'FAQ',
        'Tutorials',
        'About us',
        'Privacy solicy',
        'Terms of service',
      ],
    },
    {
      heading: 'Earn money',
      links: ['Become partner', 'Affiliate'],
    },
  ];

  return (
    <footer id="help" className="footer">
      <div className="footer__about">
        <div className="footer__logo">
          <img className="logo__pic" src="images/logo.png" alt="logo picture" />
          <span className="logo__name">
            Lasles<span className="logo__name--vpn">VPN</span>
          </span>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
        <div className="footer__icons">
          {socialIcons.map((icon, index) => (
            <div key={index} className="footer__icon">
              <img className="testimonial-star" src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
        <p className="copy-right">
          ©2024 Lasles<span className="logo__name--vpn">VPN</span>
        </p>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="footer__section">
          <h2 className="section__heading">{section.heading}</h2>
          <ul className="links">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <a className="link">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
