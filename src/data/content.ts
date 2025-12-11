import heroImage from "@/assets/hero-cafe.jpg";
import coffeeLatte from "@/assets/coffee-latte.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import pastries from "@/assets/pastries.jpg";
import profile from "@/assets/profile.jpg";

export const menuItems = {
  coffee: [
    { name: "Espresso", price: "$3.00", description: "Rich and bold single shot" },
    { name: "Latte", price: "$4.50", description: "Espresso with steamed milk and light foam" },
    { name: "Cappuccino", price: "$4.50", description: "Espresso with steamed milk and thick foam" },
    { name: "Flat White", price: "$4.25", description: "Double espresso with microfoam" },
    { name: "Mocha", price: "$5.00", description: "Espresso with chocolate and steamed milk" },
  ],
  specialty: [
    { name: "Salted Caramel Smores Latte", price: "$6.50", description: "Espresso, chocolate, toasted marshmallow, salted caramel drizzle" },
    { name: "Maple Vanilla Latte", price: "$6.00", description: "Real maple syrup, vanilla bean, espresso, steamed milk" },
    { name: "Stroopie Latte", price: "$6.50", description: "Caramel waffle cookie flavor, cinnamon, whipped cream" },
  ],
};

export const locations = [
  {
    name: "Lititz Public Library",
    address: "651 Kissel Hill Rd",
    city: "Lititz",
    postcode: "PA 17543",
  },
];

export const testimonials = [
  {
    name: "Sarah J.",
    text: "The best coffee in Lititz! The atmosphere is so cozy and welcoming.",
    rating: 5,
  },
  {
    name: "Emma W.",
    text: "A hidden gem. The staff are incredibly friendly and the flat white is perfect.",
    rating: 5,
  }
];

export const galleryImages = [
  { src: heroImage, alt: "Cafe atmosphere" },
  { src: coffeeLatte, alt: "Latte art" },
  { src: cafeInterior, alt: "Interior design" },
  { src: pastries, alt: "Fresh pastries", span: true },
  { src: profile, alt: "Customer enjoying coffee" },
];

export const schedule = [
  {
    date: new Date(2025, 10, 20), // Nov 20, 2025
    location: "Lititz Public Library",
    time: "08:00 - 16:00",
    status: "active",
  },
  {
    date: new Date(2025, 10, 21), // Nov 21, 2025
    location: "Lititz Public Library",
    time: "09:00 - 17:00",
    status: "upcoming",
  },
  {
    date: new Date(2025, 10, 22), // Nov 22, 2025
    location: "Lititz Public Library",
    time: "08:00 - 16:00",
    status: "upcoming",
  },
  {
    date: new Date(2025, 10, 23), // Nov 23, 2025
    location: "Lititz Public Library",
    time: "08:00 - 16:00",
    status: "upcoming",
  },
  {
    date: new Date(2025, 10, 24), // Nov 24, 2025
    location: "Private Event",
    time: "10:00 - 14:00",
    status: "upcoming",
  },
  {
    date: new Date(2025, 12, 15), // Nov 24, 2025
    location: "Lititz Library",
    time: "10:00 - 14:00",
    status: "upcoming",
  },
];
