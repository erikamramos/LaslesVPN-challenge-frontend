export default function Statistics() {
  const stats = [
    {
      iconSrc: 'images/icons/user.png',
      altText: 'User icon',
      number: '90+',
      name: 'Users',
    },
    {
      iconSrc: 'images/icons/location.png',
      altText: 'Location icon',
      number: '30+',
      name: 'Locations',
    },
    {
      iconSrc: 'images/icons/server.png',
      altText: 'Server icon',
      number: '50+',
      name: 'Servers',
    },
  ];
  return (
    <section className="stats">
      {stats.map(({ iconSrc, altText, number, name }, index) => (
        <div key={index} className="stats-column">
          <img className="stats-icon" src={iconSrc} alt={altText} />
          <div className="stats-data">
            <span className="stats-number">{number}</span>
            <span className="stats-name">{name}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
