import React from "react";
import "../../components/GemstoneGuide/GemstoneGarnet.css";

export const GemstoneGarnet = () => {
  let menu = [
    {
      id: 1,
      name: " Aquamarine",
      image: "./Garentimge/Garentimge.webp",
      month: "January",
      title: " Aquamarine: a timeless symbol of youth, health and hope. ",
      discription:
        " Sea, salt, sun and everything fun! These aqua-blue colored babies are a perfect ode to the ocean. So if you’re a total beach baby or if you just love the mesmerising hues of blue, go ahead and pick one.              ",
    },
    {
      id: 2,
      name: " Garent",
      image: "./garentimge/Garentimage2.png",
      month: "February",
      title:
        "Garnet’s virtues have been long believed to include passion, friendship, success, loyalty and faith.",
      discription:
        "Bold oranges, royal greens and hues of purples and pinks - are some of the hues of a Garnet. If you’re a January baby, you’re in for a treat! There are so many varieties to pick from, so go ahead uplift your spirit with your favorite Garnet gemstone.",
    },
    {
      id: 3,
      name: "Amethyst",
      image: "./Garentimge/Garentimage3.png",
      month: "March",
      title:
        "Amethyst is said to be associated with qualities of peace, courage and stability.",
      discription:
        "The Amethyst gemstone comes in different shades of the spectacular purple colour that ranges from a blend of a deep violet to a lighter lilac hue. This gemstone is as dreamy as the come, so be prepared to be transported to a soothing state of mind.",
    },
    {
      id: 4,
      name: "Diamond",
      image: "./Garentimge/Garentimage4.png",
      month: "April",
      title:
        "Considered as a paramount of gestures, it’s a symbol of eternal and endless love.",
      discription:
        "They say diamonds are a girl’s best friend. Well, they’re absolutely right. :) A diamond is the perfect gesture that there is, and honestly, who can say no to it? Wearing a diamond is also said to bring benefits such as balance, clarity and abundance. So go ahead, and give it a try.",
    },
    {
      id: 5,
      name: "Emerald",
      image: "./Garentimge/Garentimage5.webp",
      month: "May",
      title:
        "Emerald, known as the gem of Venus, is considered to be a strong symbol of the bonds of love and rebirth.",
      discription:
        "Royal. Bold. Elegant. For all our Queens out there, there’s no other way to slay the royalty quotient than with a glorious Emerald. The deep hues of green will make you weak in the knees. :)",
    },
    {
      id: 6,
      name: "Pearl",
      image: "./Garentimge/Garentimage6.png",
      month: "June",
      title: "Pearl is a symbol of purity and innocence.",
      discription:
        "Be it a pair of ripped denim, a blazer or a formal gown: Pearl is a one stop solution to give you that charming look you’ve been wanting. They’re sophisticated, classy and will be sure to make heads turn.",
    },
    {
      id: 7,
      name: " Blue Topaz",
      image: "./Garentimge/Garentimage7.png",
      month: " July ",
      title:
        "Blue Topaz, being a symbol of love, is said to foster kindness and a sweet nature.",
      discription:
        "Blue Topaz is known for its amazing aqua blue shade. It also is the perfect gemstone for all things ‘Love’ - as it represents eternal romance. So if you’re a December baby, or you just love all things cheesy, this gemstone is the one for you.",
    },
    {
      id: 8,
      name: " Citrine",
      image: "./Garentimge/Garentimage8.png",
      month: "August ",
      title:
        "Part of the Quartz family, Citrine is famously known as the Healing Quartz. It helps to support vitality and promote health.",
      discription:
        "If you’re all for ‘fun in the sun’, the Citrine gemstone is meant for you. Known to be a healing gemstone, citrine is said to be a gift from the Sun. So go and get yourself some sunshine.",
    },
    {
      id: 9,
      name: "Peridot ",
      image: "./Garentimge/Garentimage9.png",
      month: " September",
      title:
        "Peridot is a happy stone. It is known to bring happiness, warmth and emotional strength in the lives of the wearers.",
      discription:
        "This mystical gemstone is said to have healing powers, and is known as the Gem of the Sun. After all, green does have a soothing effect on us. The refreshing hue of a Peridot is something we bet you’ll always, always love.",
    },
    {
      id: 10,
      name: " Ruby",
      image: "./Garentimge/Garentimage10.png",
      month: "October ",
      title:
        "Ruby, the King of Gemstones, is said to represent love, courage and passion",
      discription:
        "The Ruby is said to be the reigning gemstone, and is said to bring an abundance of love. The deeper and more glorious the hue of the gemstone, the more valuable it is. Pick a gorgeous Ruby out, we promise you won’t regret it.",
    },
    {
      id: 11,
      name: "Sapphire ",
      image: "./Garentimge/Garentimage11.png",
      month: " November",
      title:
        "Sapphires are believed to focus the mind, encourage self-discipline and channel higher powers.",
      discription:
        "Nothing speaks royal like a true blue sapphire. Go pick out a dark blue hued beauty, if you’re a September born, or you love accessorising like the royalty you are.",
    },
    {
      id: 12,
      name: "Tourmaline ",
      image: "./Garentimge/Garentimage12.png",
      month: "December ",
      title:
        "Tourmaline is believed to protect one against evil forces, toxins, pollutants and all negative energy",
      discription:
        "The beauty of a Tourmaline gemstone is that it comes in a variety of gorgeous colours. Tourmaline is known to ward off negative energy. So you can totally pick one out, in your favourite colour too!",
    },
  ];

  return (
    <main>
      <div className="container">
        <div className="row">
          {menu.map((item) => {
            const { id, name, month, title, discription, image } = item;
            return (
              <div className="col-lg-6 p-5">
                <div className="gemstonegarnet-conatnt d-flex ">
                  {/* for image  */}
                  <div className="garnet-img ">
                    <img src={image} alt="image not found?" />
                  </div>
                  {/* for contant  */}
                  <div className="garnet-contant">
                    <h2> {name}</h2>
                    <span>{month}</span>
                    <p>{title}</p>
                  </div>
                </div>
                <p className="garent-p">{discription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
