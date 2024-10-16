export default function Testimonials() {
  const testimonials = [
    {
      name: 'Brooklyn Simmons',
      location: 'Warsaw,pland',
      image: 'images/testimonials/testimonial-1.png',
      rating: 4.5,
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.',
      highlighted: true,
    },
    {
      name: 'Darlene Robertson',
      location: 'Warsaw,pland',
      image: 'images/testimonials/testimonial-2.png',
      rating: 4.5,
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.',
      highlighted: false,
    },
    {
      name: 'Darrell Steward',
      location: 'Warsaw,pland',
      image: 'images/testimonials/testimonial-3.png',
      rating: 4.5,
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.',
      highlighted: false,
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <h2 className="section__title">
        Trusted by thousands of
        <br />
        happy customer
      </h2>
      <p className="section__description">
        Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id
        <br />
        purus ullamcorper. Vel vel erat semper augue.
      </p>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className={`testimonial ${
              testimonial.highlighted ? 'testimonial--highlighted' : ''
            }`}
          >
            <div className="testimonial-header">
              <div className="testimonial-header-data">
                <img
                  className="testimonial-image"
                  src={testimonial.image}
                  alt="person picture"
                />
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <span className="testimonial-location">
                    {testimonial.location}
                  </span>
                </div>
              </div>
              <div className="testimonial-header-rating">
                <span className="testimonial-rating">{testimonial.rating}</span>
                <img
                  className="testimonial-star"
                  src="images/icons/star.png"
                  alt="Star icon"
                />
              </div>
            </div>
            <div className="testimonial-content">{testimonial.content}</div>
          </article>
        ))}
      </div>

      <div className="testimonials-controls">
        <div className="testimonials-controls__indicators">
          <span className="indicator-active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>
        <div className="testimonials-controls__arrows">
          <div className="arrow arrow--left">
            <img src="/images/icons/chevron-left.svg" alt="" />
          </div>
          <div className="arrow arrow--right">
            <img src="/images/icons/chevron-right.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
