import React from "react";
import "./testimonials.scss";
export default function testimonials() {
  const data = [
    {
      id: 1,
      name: "Asma Abbasi",
      title: "Web Developer",
      img: "https://www.lifeofpix.com/wp-content/uploads/2022/06/A7303346-2-1600x2400.jpg",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Ashkan Abbasi",
      title: "Co-Founder of DELKA",
      img: "https://www.lifeofpix.com/wp-content/uploads/2022/06/PauseClope-1600x2400.jpg",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Mohammad Abbasi",
      title: "CEO of ALBI",
      img: "https://www.lifeofpix.com/wp-content/uploads/2022/05/Fly-in-Paris-1600x1067.jpg",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" alt="" className="left" />
              <img className="user" src={d.img} alt="" />
              <img src={d.icon} alt="" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
