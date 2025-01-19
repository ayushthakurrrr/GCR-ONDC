import React from 'react';
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/HomePage.css'; // Import the CSS file for styling

function HomePage() {
  const navigate = useNavigate();

  // Sample category data (you can replace this with dynamic data)
  const categories = [
    {
      name: 'Electronics',
      subcategories: [
        // { name: 'Smartphones', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736950880/jciuiqt3rirdgh02oelx.avif', category_id: 'CAT_SMARTPHONES' },
        { name: 'Smartphones', img: 'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786290/Item%20Photos/Electronics/smartphone/unfun5ljmqxrsuq2n6b1.jpg', category_id: 'CAT_SMARTPHONES' },
        // { name: 'Laptops', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952047/dmvj2oopegnixotxwdag.jpg', category_id: 'CAT_LAPTOPS' },
        { name: 'Laptops', img: 'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786289/Item%20Photos/Electronics/laptops/y6tbgpmhheuzpiofrzox.jpg', category_id: 'CAT_LAPTOPS' },
        { name: 'Televisions', img: 'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786293/Item%20Photos/Electronics/television/goql9aeoqsijf52fc2mu.jpg', category_id: 'CAT_TELEVISIONS' },
        // { name: 'Televisions', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736951654/c0vl7teidb1yyqiyjf7x.jpg', category_id: 'CAT_TELEVISIONS' },
        { name: 'Headphones', img: 'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786288/Item%20Photos/Electronics/Headphones/fhhfgmzf0s9zpruzlxgz.jpg', category_id: 'CAT_HEADPHONES' },
        // { name: 'Headphones', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736951654/orxxiixctsihseqw2kdj.jpg', category_id: 'CAT_HEADPHONES' },
        { name: 'Cameras', img: 'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786287/Item%20Photos/Electronics/cameras/iljivqbfejpzbkn18jud.jpg', category_id: 'CAT_CAMERAS' },
        // { name: 'Cameras', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736951654/vxrwug30ag447kb1uwxp.jpg', category_id: 'CAT_CAMERAS' },
      ],
    },
    {
      name: 'Healthcare',
      subcategories: [
        { name: 'Blood Pressure Monitors', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952587/up2xycnrje857okqzhap.jpg', category_id: 'CAT_BP_MONITORS' },
        { name: 'Thermometers', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952587/u4iccvszw29aj59vlyn4.jpg', category_id: 'CAT_THERMOMETERS' },
        { name: 'Glucometers', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952587/oxwajs4hidx5if3kmma6.jpg', category_id: 'CAT_GLUCOMETERS' },
        { name: 'Pulse Oximeters', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952587/yxmnjabuhmbndhwsr1ma.jpg', category_id: 'CAT_PULSE_OXIMETERS' },
        { name: 'Wheelchairs', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952587/rnas4nn2tssaozmvomt2.jpg', category_id: 'CAT_WHEELCHAIRS' },
      ],
    }, {
      name: 'Technology',
      subcategories: [
        { name: 'Productivity Tools', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1737031129/oqrkjkgpfcicfgsytw4s.png', category_id: 'CAT_PRODUCTIVITY_SOFTWARES' },
        { name: 'Development', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954558/i3nru5cwiwyp15go1aij.png', category_id: 'CAT_DEVELOPMENT_SOFTWARES' },
        { name: 'Cybersecurity', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954181/kybbjmebppt1ngtbeoti.png', category_id: 'CAT_CYBERSECURITY' },
        { name: 'Cloud Services', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/xfvrqicdlehpegbj3lif.png',category_id: 'CAT_CLOUD_SERVICES ' },
        { name: 'Gaming', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/hqdgnwory2135s5gnzxf.jpg', category_id: 'CAT_GAMING' },
      ],
    },
    {
      name: 'Education',
      subcategories: [
        { name: 'Programming Courses', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/srb2cm8qviuwqsmooae6.jpg', category_id: 'CAT_COURSES_PROGRAMMING' },
        { name: 'Language Learning', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954558/e2ewk6ym5fdne9961pbp.png',category_id: 'CAT_COURSES_LANGUAGE' },
        { name: 'Test Preparation', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954558/kb1usu5jbqa5ekhwwxae.png', category_id: 'CAT_TEST_PREP' },
        { name: 'Certifications', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954558/dlbwqi69zbxcyqzjghop.png', category_id: 'CAT_COURSES_CERTIFICATIONS' }
      ],
    },
    {
      name: 'Entertainment',
      subcategories: [
        { name: 'Movies', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/rezu1qhwblb3vmfuddiv.jpg', category_id: 'CAT_STREAMING_SERVICES' },
        { name: 'Music', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/udhjinaem3zbrvzbb8ny.png', category_id: 'CAT_STREAMING_MUSIC' },
        { name: 'Audiobooks', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/uygyok6q2jtog2kghqgy.png', category_id: 'CAT_STREAMING_AUDIOBOOKS' }
      ],
    }
  ];

  // Slider settings
  const sliderSettings = {
    dots: false, // No navigation dots for simplicity
    infinite: true, // Continuous loop
    speed: 5000, // Adjust speed for smooth rolling
    slidesToShow: 5, // Number of slides visible
    slidesToScroll: 1, // Scrolls one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Seamless autoplay
    arrows: false, // Remove navigation arrows
    cssEase: "linear", // Smooth motion
    pauseOnHover: true, // Pauses autoplay when hovering over the slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  
  

  // Handle category click
  const handleCategoryClick = (category_id) => {
    navigate(`/search?category=${category_id}`);
  };

  const [bgColorIndex, setBgColorIndex] = React.useState(0);

  // Dynamic colors for GCR
  const colors = ['#ff007f', '#00bfff', '#ff4500', '#32cd32', '#ff1493'];

  // Change GCR background color every 0.25 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setBgColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 250);
    return () => clearInterval(interval);
  }, [colors.length]);
  return (
    <div className="homepage">
     <p className="welcome-text">Welcome !!!</p>
      <p className="explore-text">Explore the shop,</p>
      <p className="gcr-line">
       More efficiently using {' '}
        <span
          className="gcr-text"
          // style={{
          //   backgroundColor: colors[bgColorIndex], // Dynamic color
          // }}
        >
          GCR
        </span>
      </p>

      {categories.map((category) => (
        <div key={category.name} className="category-block">
          <h2>{category.name}</h2>
          <Slider {...sliderSettings} slidesToShow={Math.min(5, category.subcategories.length)}>
            {category.subcategories.map((sub) => (
              <div
                key={sub.name}
                className="subcategory-item"
                onClick={() => handleCategoryClick(sub.category_id)}
              >
                <img src={sub.img} alt={sub.name} />
                <p>{sub.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
