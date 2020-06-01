import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Tashkent Mustaqillik maydoni",
    description: "Mustaqillik Maydoni O`zbekistonning ajoyib joylaridan biri.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Monument_at_Mustaqillik_maydoni_02.jpg",
    address: "Tashkent, Uzbekistan",
    location: {
      lat: 41.3152564,
      lng: -69.2644382,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the famous sky scrapes in the world",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Monument_at_Mustaqillik_maydoni_02.jpg",
    address: "Tashkent, Uzbekistan",  
    location: {
      lat: 41.3152564,
      lng: -69.2644382,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
