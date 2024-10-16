export default function Features() {
  const featuresList = [
    'Powerful online protection.',
    'Internet without borders.',
    'Supercharged VPN',
    'No specific time limits.',
  ];

  return (
    <section id="features" className="features">
      <img
        className="features__image"
        src="images/image2.png"
        alt="features image"
      />
      <div className="features__content">
        <h2 className="features__title">
          We Provide Many Features You Can Use
        </h2>
        <p className="features__description">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
        <ul className="features__list">
          {featuresList.map((description, index) => (
            <li key={index} className="feature">
              <img
                className="feature__icon"
                src="images/icons/right-circle.png"
                alt="correct icon"
              />
              <p className="feature__description">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
