export default function Hero() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <h1 className="about__title">
          Want anything to be easy with{' '}
          <span className="brand">LaslesVPN.</span>
        </h1>
        <p className="about__description">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
        <a className="about__button button" href="#" target="_blank">
          Get Started
        </a>
      </div>
      <img className="about__image" src="images/image1.png" alt="about image" />
    </section>
  );
}
