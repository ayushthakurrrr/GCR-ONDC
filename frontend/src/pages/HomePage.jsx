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
        { name: 'Smartphones', img: 'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786290/Item%20Photos/Electronics/smartphone/unfun5ljmqxrsuq2n6b1.jpg', category_id: 'CAT_SMARTPHONES' },
        { name: 'Laptops', img: 'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786289/Item%20Photos/Electronics/laptops/y6tbgpmhheuzpiofrzox.jpg', category_id: 'CAT_LAPTOPS' },
        { name: 'Televisions', img: 'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786293/Item%20Photos/Electronics/television/goql9aeoqsijf52fc2mu.jpg', category_id: 'CAT_TELEVISIONS' },
        { name: 'Headphones', img: 'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786288/Item%20Photos/Electronics/Headphones/fhhfgmzf0s9zpruzlxgz.jpg', category_id: 'CAT_HEADPHONES' },
        { name: 'Cameras', img: 'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786287/Item%20Photos/Electronics/cameras/iljivqbfejpzbkn18jud.jpg', category_id: 'CAT_CAMERAS' },
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
        { name: 'Cloud Services', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/xfvrqicdlehpegbj3lif.png', category_id: 'CAT_CLOUD_SERVICES ' },
        { name: 'Gaming', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/hqdgnwory2135s5gnzxf.jpg', category_id: 'CAT_GAMING' },
      ],
    },
    {
      name: 'Education',
      subcategories: [
        { name: 'Programming Courses', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/srb2cm8qviuwqsmooae6.jpg', category_id: 'CAT_COURSES_PROGRAMMING' },
        { name: 'Language Learning', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954558/e2ewk6ym5fdne9961pbp.png', category_id: 'CAT_COURSES_LANGUAGE' },
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const handleCategoryClick = (category_id) => {
    navigate(`/search?category=${category_id}`);
  };

  return (
    <div className="homepage">
      <div className='gcr-container'>
        <div className='gcr-box'>
          <p className="welcome-text">Welcome !!!</p>
          <p className="explore-text">Explore the shop,</p>
          <p className="gcr-line">
            More efficiently using {' '}
            <span
              className="gcr-text"
            >
              GCR
            </span>
          </p>
        </div>
        <div className='photo'>
          <img src="/Untitled design (3)[1].png" alt="" />
        </div>
      </div>

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
