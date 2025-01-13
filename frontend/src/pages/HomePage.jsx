// // import React from 'react';
// // import SearchBar from '../components/SearchBar';

// // function HomePage() {
// //   return (
// //     <div>
// //       <h2>Welcome to the GCR Prototype</h2>
// //     </div>
// //   );
// // }

// // export default HomePage;

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
//         { name: 'Smartphones', img: '/images/smartphones.jpg', link: '/retail/electronics/smartphones' },
//         { name: 'Laptops', img: '/images/laptops.jpg', link: '/retail/electronics/laptops' },
//         { name: 'Televisions', img: '/images/televisions.jpg', link: '/retail/electronics/televisions' },
//         { name: 'Headphones', img: '/images/headphones.jpg', link: '/retail/electronics/headphones' },
//         { name: 'Cameras', img: '/images/cameras.jpg', link: '/retail/electronics/cameras' },
//       ],
//     },
//     {
//       name: 'Healthcare',
//       subcategories: [
//         { name: 'Blood Pressure Monitors', img: '/images/blood-pressure.jpg', link: '/healthcare/blood-pressure-monitors' },
//         { name: 'Thermometers', img: '/images/thermometers.jpg', link: '/healthcare/thermometers' },
//         { name: 'Glucometers', img: '/images/glucometers.jpg', link: '/healthcare/glucometers' },
//         { name: 'Pulse Oximeters', img: '/images/pulse-oximeters.jpg', link: '/healthcare/pulse-oximeters' },
//         { name: 'Wheelchairs', img: '/images/wheelchairs.jpg', link: '/healthcare/wheelchairs' },
//       ],
//     },
//     {
//       name: 'Technology',
//       subcategories: [
//         { name: 'Productivity', img: '/images/productivity.jpg', link: '/technology/productivity' },
//         { name: 'Development', img: '/images/development.jpg', link: '/technology/development' },
//         { name: 'Cybersecurity', img: '/images/cybersecurity.jpg', link: '/technology/cybersecurity' },
//         { name: 'Cloud Services', img: '/images/cloud-services.jpg', link: '/technology/cloud-services' },
//         { name: 'Gaming', img: '/images/gaming.jpg', link: '/technology/gaming' },
//       ],
//     },
//     {
//       name: 'Education',
//       subcategories: [
//         { name: 'Programming Courses', img: '/images/programming.jpg', link: '/education/programming-courses' },
//         { name: 'Language Learning', img: '/images/language-learning.jpg', link: '/education/language-learning' },
//         { name: 'Test Preparation', img: '/images/test-prep.jpg', link: '/education/test-preparation' },
//         { name: 'Certifications', img: '/images/certifications.jpg', link: '/education/certifications' },
//         { name: 'K-12 Resources', img: '/images/k12.jpg', link: '/education/k12-resources' },
//       ],
//     },
//     {
//       name: 'Entertainment',
//       subcategories: [
//         { name: 'Movies', img: '/images/movies.jpg', link: '/entertainment/movies' },
//         { name: 'Music', img: '/images/music.jpg', link: '/entertainment/music' },
//         { name: 'Gaming Platforms', img: '/images/gaming-platforms.jpg', link: '/entertainment/gaming-platforms' },
//         { name: 'Audiobooks', img: '/images/audiobooks.jpg', link: '/entertainment/audiobooks' },
//         { name: 'Live Sports', img: '/images/live-sports.jpg', link: '/entertainment/live-sports' },
//       ],
//     },
//   ];

//   // Slider settings
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

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
//                   <img src={sub.img} alt={sub.name} />
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
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../css/HomePage.css'; // Import the CSS file for styling

function HomePage() {
  // Sample category data (you can replace this with dynamic data)
  const categories = [
    {
      name: 'Electronics',
      subcategories: [
        { name: 'Smartphones', img: '/images/smartphones.jpg', link: '/retail/electronics/smartphones' },
        { name: 'Laptops', img: '/images/laptops.jpg', link: '/retail/electronics/laptops' },
        { name: 'Televisions', img: '/images/televisions.jpg', link: '/retail/electronics/televisions' },
        { name: 'Headphones', img: '/images/headphones.jpg', link: '/retail/electronics/headphones' },
        { name: 'Cameras', img: '/images/cameras.jpg', link: '/retail/electronics/cameras' },
      ],
    },
    {
      name: 'Healthcare',
      subcategories: [
        { name: 'Blood Pressure Monitors', img: '/images/blood-pressure.jpg', link: '/healthcare/blood-pressure-monitors' },
        { name: 'Thermometers', img: '/images/thermometers.jpg', link: '/healthcare/thermometers' },
        { name: 'Glucometers', img: '/images/glucometers.jpg', link: '/healthcare/glucometers' },
        { name: 'Pulse Oximeters', img: '/images/pulse-oximeters.jpg', link: '/healthcare/pulse-oximeters' },
        { name: 'Wheelchairs', img: '/images/wheelchairs.jpg', link: '/healthcare/wheelchairs' },
      ],
    },
    {
      name: 'Technology',
      subcategories: [
        { name: 'Productivity', img: '/images/productivity.jpg', link: '/technology/productivity' },
        { name: 'Development', img: '/images/development.jpg', link: '/technology/development' },
        { name: 'Cybersecurity', img: '/images/cybersecurity.jpg', link: '/technology/cybersecurity' },
        { name: 'Cloud Services', img: '/images/cloud-services.jpg', link: '/technology/cloud-services' },
        { name: 'Gaming', img: '/images/gaming.jpg', link: '/technology/gaming' },
      ],
    },
    {
      name: 'Education',
      subcategories: [
        { name: 'Programming Courses', img: '/images/programming.jpg', link: '/education/programming-courses' },
        { name: 'Language Learning', img: '/images/language-learning.jpg', link: '/education/language-learning' },
        { name: 'Test Preparation', img: '/images/test-prep.jpg', link: '/education/test-preparation' },
        { name: 'Certifications', img: '/images/certifications.jpg', link: '/education/certifications' },
        { name: 'K-12 Resources', img: '/images/k12.jpg', link: '/education/k12-resources' },
      ],
    },
    {
      name: 'Entertainment',
      subcategories: [
        { name: 'Movies', img: '/images/movies.jpg', link: '/entertainment/movies' },
        { name: 'Music', img: '/images/music.jpg', link: '/entertainment/music' },
        { name: 'Gaming Platforms', img: '/images/gaming-platforms.jpg', link: '/entertainment/gaming-platforms' },
        { name: 'Audiobooks', img: '/images/audiobooks.jpg', link: '/entertainment/audiobooks' },
        { name: 'Live Sports', img: '/images/live-sports.jpg', link: '/entertainment/live-sports' },
      ],
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 subcategories at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="homepage">
      <h1>Welcome, explore the shop more efficiently using GCR</h1>

      {categories.map((category) => (
        <div key={category.name} className="category-block">
          <h2>{category.name}</h2>
          <Slider {...sliderSettings}>
            {category.subcategories.map((sub) => (
              <div key={sub.name} className="subcategory-item">
                <Link to={sub.link}>
                  <img src={sub.img} alt={sub.name} />
                  <p>{sub.name}</p>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
