import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs } from "firebase/firestore/lite";

const admin = require("firebase-admin");

const firebaseConfig = {
  apiKey: "AIzaSyAFkSlTCW8p6kpm-XO1QNmNsWH1rA0WbII",
  authDomain: "van-life-tej.firebaseapp.com",
  projectId: "van-life-tej",
  storageBucket: "van-life-tej.firebasestorage.app",
  messagingSenderId: "795563367247",
  appId: "1:795563367247:web:4c1ddbe3fde2ac5caf433a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
 

async function seedDatabase() {
  const vans = [
    // {
    //   id: "1",
    //   name: "Modest Explorer",
    //   price: 60,
    //   description:
    //     "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
    //   imageUrl:
    //     "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
    //   type: "simple",
    //   hostId: "123",
    // },
    {
      id: "2",
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
      type: "rugged",
      hostId: "123",
    },
    {
      id: "3",
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
      type: "luxury",
      hostId: "456",
    },
    {
      id: "4",
      name: "Dreamfinder",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
      type: "simple",
      hostId: "789",
    },
    {
      id: "5",
      name: "The Cruiser",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
      type: "luxury",
      hostId: "789",
    },
    {
      id: "6",
      name: "Green Wonder",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
      type: "rugged",
      hostId: "123",
    },
  ];

  

  const batch = db.batch();

  // add vans
  vans.forEach((van) => {
    const ref = db.collection("vans").doc(van.id);
    batch.set(ref, van);
  });



  await batch.commit();
  console.log("✅ Firestore seeded successfully");
}

seedDatabase().catch(console.error);
