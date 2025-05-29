import tour1 from "./images/tour-1.jpg";
import tour2 from "./images/tour-2.jpg";
import tour3 from "./images/tour-3.jpg";
import tour4 from "./images/tour-4.jpg";
import tour5 from "./images/tour-5.jpg";
import tour6 from "./images/tour-6.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com/profile.php?id=100022242964905",
    icon: "fab fa-facebook",
  },
  { id: 2, href: "https://github.com/Prantik009", icon: "fab fa-github" },
  {
    id: 3,
    href: "https://www.instagram.com/prantik_540?igsh=cnZia2piZG9kOWw5&utm_source=qr",
    icon: "fab fa-instagram",
  },
];

export const services = [
  {
    id: 1,
    Title: "Customized tours",
    text: "Tailored itineraries to suit your preferences and travel style.",
    icon: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    Title: "Expert guides",
    text: "Knowledgeable local guides to enhance your cultural and historical experiences.",
    icon: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    Title: "Reliable transportation",
    text: "Safe and comfortable vehicles with experienced drivers for seamless travel.",
    icon: "fas fa-socks fa-fw",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2024",
    title: "Taj Mahal, Agra",
    info: "Iconic marble mausoleum symbolizing eternal love and architectural beauty. Visit to witness its grandeur.",
    location: "Uttar Pradesh",
    cost: 10000,
    duration: 2,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2024",
    title: "Goa Beaches",
    info: "This destination has awesome beaches, vibrant nightlife, and charming Portuguese architecture. Experience the best of Goa here.",
    location: "Goa",
    cost: 15000,
    duration: 3,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2024",
    title: "Kerala Backwaters",
    info: "Explore serene backwaters, lush green landscapes, and tranquil surroundings. Experience the beauty of Kerala.",
    location: "Kerala",
    cost: 20000,
    duration: 4,
  },
  {
    id: 4,
    image: tour4,
    date: "November 9th, 2024",
    title: "Jaipur, Rajasthan",
    info: "Majestic palaces, vibrant bazaars, and rich Rajput culture await you here. Immerse yourself in the royal heritage of Jaipur.",
    location: "Rajasthan",
    cost: 17500,
    duration: 3,
  },
  {
    id: 5,
    image: tour5,
    date: "december 5th, 2024",
    title: "Ladakh Adventure",
    info: "Explore remote high-altitude desert, Buddhist monasteries, and breathtaking landscapes. Embark on an unforgettable adventure in Ladakh.",
    location: "Ladakh",
    cost: 25000,
    duration: 5,
  },
  {
    id: 6,
    image: tour6,
    date: "January 13th, 2025",
    title: "Darjeeling Tea Gardens",
    info: "Here we can see scenic hill station renowned for its tea gardens and panoramic views. Enjoy the tranquility and beauty of Darjeeling.",
    location: "Darjeeling",
    cost: 12500,
    duration: 2,
  },
];
