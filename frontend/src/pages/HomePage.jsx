// import React from 'react';
// import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../css/HomePage.css'; // Import the CSS file for styling

// function HomePage() {
//   // Sample category data (you can replace this with dynamic data)
//   const categories = [
//     {
//       name: 'Electronics',
//       subcategories: [
//         { name: 'Smartphones', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736950880/jciuiqt3rirdgh02oelx.avif', link: '/retail/electronics/smartphones' },
//         { name: 'Laptops', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952047/dmvj2oopegnixotxwdag.jpg', link: '/retail/electronics/laptops' },
//         { name: 'Televisions', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736951654/c0vl7teidb1yyqiyjf7x.jpg', link: '/retail/electronics/televisions' },
//         { name: 'Headphones', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736951654/orxxiixctsihseqw2kdj.jpg', link: '/retail/electronics/headphones' },
//         { name: 'Cameras', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736951654/vxrwug30ag447kb1uwxp.jpg', link: '/retail/electronics/cameras' },
//       ],
//     },
//     {
//       name: 'Healthcare',
//       subcategories: [
//         { name: 'Blood Pressure Monitors', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952587/up2xycnrje857okqzhap.jpg', link: '/healthcare/blood-pressure-monitors' },
//         { name: 'Thermometers', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952587/u4iccvszw29aj59vlyn4.jpg', link: '/healthcare/thermometers' },
//         { name: 'Glucometers', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952587/oxwajs4hidx5if3kmma6.jpg', link: '/healthcare/glucometers' },
//         { name: 'Pulse Oximeters', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952587/yxmnjabuhmbndhwsr1ma.jpg', link: '/healthcare/pulse-oximeters' },
//         { name: 'Wheelchairs', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952587/rnas4nn2tssaozmvomt2.jpg', link: '/healthcare/wheelchairs' },
//       ],
//     },
//     {
//       name: 'Technology',
//       subcategories: [
//         { name: 'Software Tools', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/ekwnoujoubawmz9rblop.jpg', link: '/technology/productivity' },
//         { name: 'Development', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954558/i3nru5cwiwyp15go1aij.png', link: '/technology/development' },
//         { name: 'Cybersecurity', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954181/kybbjmebppt1ngtbeoti.png', link: '/technology/cybersecurity' },
//         { name: 'Cloud Services', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/xfvrqicdlehpegbj3lif.png', link: '/technology/cloud-services' },
//         { name: 'Gaming', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/hqdgnwory2135s5gnzxf.jpg', link: '/technology/gaming' },
//       ],
//     },
//     {
//       name: 'Education',
//       subcategories: [
//         { name: 'Programming Courses', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/srb2cm8qviuwqsmooae6.jpg', link: '/education/programming-courses' },
//         { name: 'Language Learning', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954558/e2ewk6ym5fdne9961pbp.png', link: '/education/language-learning' },
//         { name: 'Test Preparation', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954558/kb1usu5jbqa5ekhwwxae.png', link: '/education/test-preparation' },
//         { name: 'Certifications', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954558/dlbwqi69zbxcyqzjghop.png', link: '/education/certifications' }
//       ],
//     },
//     {
//       name: 'Entertainment',
//       subcategories: [
//         { name: 'Movies', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/rezu1qhwblb3vmfuddiv.jpg', link: '/entertainment/movies' },
//         { name: 'Music', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/udhjinaem3zbrvzbb8ny.png', link: '/entertainment/music' },
//         { name: 'Gaming Platforms', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/cidpz7e3ue50uxgojg6a.jpg', link: '/entertainment/gaming-platforms' },
//         { name: 'Audiobooks', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/uygyok6q2jtog2kghqgy.png', link: '/entertainment/audiobooks' }
//       ],
//     },
//   ];

//   // Slider settings
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5, // Show 5 subcategories at a time
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   // Custom Arrow Components
//   function CustomPrevArrow(props) {
//     const { onClick } = props;
//     return (
//       <button className="slick-prev" onClick={onClick}>
//         &#8592;
//       </button>
//     );
//   }

//   function CustomNextArrow(props) {
//     const { onClick } = props;
//     return (
//       <button className="slick-next" onClick={onClick}>
//         &#8594;
//       </button>
//     );
//   }

//   return (
//     <div className="homepage">
//       <h1>Welcome, explore the shop more efficiently using GCR</h1>

//       {categories.map((category) => (
//         <div key={category.name} className="category-block">
//           <h2>{category.name}</h2>
//           <Slider {...sliderSettings}>
//             {category.subcategories.map((sub) => (
//               <div key={sub.name} className="subcategory-item">
//                 <Link to={sub.link}>
//                   { <img src={sub.img} alt={sub.name} /> }
//                   {/* <img src={'https://res.cloudinary.com/dlcx4dqd1/image/upload/v1736786290/Item%20Photos/Electronics/smartphone/g9jyofokrki6qaigzi2r.jpg'} alt={sub.name} /> */}
//                   <p>{sub.name}</p>
//                 </Link>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HomePage;


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
        { name: 'Smartphones', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736950880/jciuiqt3rirdgh02oelx.avif', category_id: 'CAT_SMARTPHONES' },
        { name: 'Laptops', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736952047/dmvj2oopegnixotxwdag.jpg', category_id: 'CAT_LAPTOPS' },
        { name: 'Televisions', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736951654/c0vl7teidb1yyqiyjf7x.jpg', category_id: 'CAT_TELEVISIONS' },
        { name: 'Headphones', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736951654/orxxiixctsihseqw2kdj.jpg', category_id: 'CAT_HEADPHONES' },
        { name: 'Cameras', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736951654/vxrwug30ag447kb1uwxp.jpg', category_id: 'CAT_CAMERAS' },
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
        { name: 'Software Tools', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736953969/ekwnoujoubawmz9rblop.jpg', category_id: 'CAT_PRODUCTIVITY_SOFTWARES' },
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
        { name: 'Movies', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/rezu1qhwblb3vmfuddiv.jpg', category_id: 'CAT_MOVIES' },
        { name: 'Music', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/udhjinaem3zbrvzbb8ny.png', category_id: 'CAT_MUSIC' },
        { name: 'Gaming Platforms', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/cidpz7e3ue50uxgojg6a.jpg', category_id: 'CAT_GAMING_PLATFORMS' },
        { name: 'Audiobooks', img: 'https://res.cloudinary.com/dyybjybnc/image/upload/v1736954998/uygyok6q2jtog2kghqgy.png', category_id: 'CAT_STREAMING_AUDIOBOOKS' }
      ],
    }
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Handle category click
  const handleCategoryClick = (category_id) => {
    navigate(`/search?category=${category_id}`);
  };

  return (
    <div className="homepage">
      <h1>Welcome, explore the shop more efficiently using GCR</h1>

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
