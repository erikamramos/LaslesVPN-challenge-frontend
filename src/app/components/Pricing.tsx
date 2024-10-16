export default function Pricing() {
  const plans = [
    {
      title: 'Free Plan',
      price: 'Free',
      features: [
        'Unlimited bandwidth',
        'Encrypted connection',
        'Yes traffic logs',
      ],
    },
    {
      title: 'Standard Plan',
      price: '$9 / mo',
      features: [
        'Unlimited bandwidth',
        'Encrypted connection',
        'Yes traffic logs',
        'Works on all devices',
        'Connect anywhere',
      ],
    },
    {
      title: 'Premium Plan',
      price: '$12 / mo',
      features: [
        'Unlimited bandwidth',
        'Encrypted connection',
        'Yes traffic logs',
        'Works on all devices',
        'Connect anywhere',
        'Get new Features',
      ],
    },
  ];

  return (
    <section id="pricing" className="plan section">
      <h2 className="section__title">Choose Your Plan</h2>
      <p className="section__description">
        Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
        <br />
        id purus ullamcorper. Vel vel erat semper augue.
      </p>
      <div className="cards">
        {plans.map((plan, index) => (
          <article key={index} className="card">
            <img
              className="card__image"
              src="images/plan.png"
              alt="plan image"
            />
            <h2 className="card__title">{plan.title}</h2>
            <ul className="features__list">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="feature">
                  <img
                    className="feature__icon"
                    src="images/icons/check.svg"
                    alt="correct icon"
                  />
                  <p className="card__description">{feature}</p>
                </li>
              ))}
            </ul>
            <h3 className="card__price">{plan.price}</h3>
            <a href="#" className="section__button button card__button">
              Select
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
