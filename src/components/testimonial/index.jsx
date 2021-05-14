import QuotesIcn from "../../images/bg-quotes.png";
import Profile1 from "../../images/profile-1.jpg";
import Profile2 from "../../images/profile-2.jpg";
import Profile3 from "../../images/profile-3.jpg";

export default function testimonial() {
  const testimonialList = [
    {
      id: 1,
      content:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      img: Profile1,
      name: "Satish Patel",
      post: "Founder & CEO, Huddle"
    },
    {
      id: 2,
      content:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      img: Profile2,
      name: "Bruce McKenzie",
      post: "Founder & CEO, Huddle"
    },
    {
      id: 3,
      content:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      img: Profile3,
      name: "Iva Boyd",
      post: "Founder & CEO, Huddle"
    }
  ];

  return (
    <div className="testimonial-container">
      <img className="quoteImg" src={QuotesIcn} alt="quotes icon" />
      {testimonialList.map((testimonial) => {
        return (
          <div className="testimonial-item-container" key={testimonial.id}>
            <p className="testimonial-content">{testimonial.content}</p>
            <div className="profile-container">
              <img src={testimonial.img} alt="" />
              <div>
                <h5>{testimonial.name}</h5>
                <p>{testimonial.post}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
