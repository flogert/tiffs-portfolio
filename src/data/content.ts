import heroImage from "@/assets/hero-cafe.jpg";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import profile from "@/assets/profile.jpg";

export const menuItems = {
  drinks: [
    { name: "Espresso", price: "$2.00", description: "Double Shot" },
    { name: "Americano", price: "$3.00", description: "Double Shot Espresso, Water" },
    { name: "Cortado", price: "$4.00", description: "Espresso, Steamed Milk (8oz.)" },
    { name: "Cappuccino", price: "$5.00", description: "Espresso, Steamed Milk, Foam (12oz.)" },
    { name: "Latte", price: "$5.50 / $6.00", description: "Espresso, Steamed Milk, Flavor of Choice (12oz. / 16oz.)" },
    { name: "Chai Latte", price: "$6.00", description: "Black Scottie Chai, Steamed Milk" },
    { name: "Matcha Latte", price: "$6.00", description: "Ceremonial Grade Matcha, Milk, Maple Syrup, Vanilla, Salt" },
    { name: "Hot Chocolate", price: "$4.00", description: "Chocolate Syrup, Steamed Milk (12oz.)" },
    { name: "Kid's Hot Chocolate or Steamer", price: "$3.00", description: "Chocolate or Flavor of Choice, Steamed Milk (8oz.)" },
  ],
  flavors: [
    { name: "Vanilla", price: "", description: "" },
    { name: "Caramel", price: "", description: "" },
    { name: "Mocha", price: "", description: "" },
    { name: "Maple", price: "", description: "" },
    { name: "Whipped Honey + Cinnamon", price: "", description: "" },
    { name: "See Instagram for Seasonal Flavors", price: "", description: "@tiffscoffeebar" },
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
  { src: gallery1, alt: "Tiff's Coffee Bar" },
  { src: gallery2, alt: "Tiff's Coffee Bar" },
  { src: gallery3, alt: "Tiff's Coffee Bar" },
  { src: gallery4, alt: "Tiff's Coffee Bar", span: true },
  { src: gallery5, alt: "Tiff's Coffee Bar" },
  { src: gallery6, alt: "Tiff's Coffee Bar" },
];

// January - March 2026 Schedule at Lititz Library
// Wednesdays 4-8pm, Thursdays 9-2pm
// Unavailable: January 31, February 17-24, March 7
export const schedule = [
  // January 2026 - Wednesdays
  { date: new Date(2026, 0, 7), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  { date: new Date(2026, 0, 14), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  { date: new Date(2026, 0, 21), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  { date: new Date(2026, 0, 28), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  // January 2026 - Thursdays
  { date: new Date(2026, 0, 8), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  { date: new Date(2026, 0, 15), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  { date: new Date(2026, 0, 22), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  { date: new Date(2026, 0, 29), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  // January 31 - Unavailable for events
  { date: new Date(2026, 0, 31), location: "Unavailable for Events", time: "", status: "unavailable" },
  // February 2026 - Wednesdays
  { date: new Date(2026, 1, 4), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  { date: new Date(2026, 1, 11), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  { date: new Date(2026, 1, 25), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  // February 2026 - Thursdays
  { date: new Date(2026, 1, 5), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  { date: new Date(2026, 1, 12), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  { date: new Date(2026, 1, 26), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  // February 17-24 - Unavailable for events
  { date: new Date(2026, 1, 17), location: "Unavailable for Events", time: "", status: "unavailable" },
  { date: new Date(2026, 1, 18), location: "Unavailable for Events", time: "", status: "unavailable" },
  { date: new Date(2026, 1, 19), location: "Unavailable for Events", time: "", status: "unavailable" },
  { date: new Date(2026, 1, 20), location: "Unavailable for Events", time: "", status: "unavailable" },
  { date: new Date(2026, 1, 21), location: "Unavailable for Events", time: "", status: "unavailable" },
  { date: new Date(2026, 1, 22), location: "Unavailable for Events", time: "", status: "unavailable" },
  { date: new Date(2026, 1, 23), location: "Unavailable for Events", time: "", status: "unavailable" },
  { date: new Date(2026, 1, 24), location: "Unavailable for Events", time: "", status: "unavailable" },
  // March 2026 - Wednesdays
  { date: new Date(2026, 2, 4), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  { date: new Date(2026, 2, 11), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  { date: new Date(2026, 2, 18), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  { date: new Date(2026, 2, 25), location: "Lititz Library", time: "4:00pm - 8:00pm", status: "upcoming" },
  // March 2026 - Thursdays
  { date: new Date(2026, 2, 5), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  { date: new Date(2026, 2, 12), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  { date: new Date(2026, 2, 19), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  { date: new Date(2026, 2, 26), location: "Lititz Library", time: "9:00am - 2:00pm", status: "upcoming" },
  // March 7 - Unavailable for events
  { date: new Date(2026, 2, 7), location: "Unavailable for Events", time: "", status: "unavailable" },
];
