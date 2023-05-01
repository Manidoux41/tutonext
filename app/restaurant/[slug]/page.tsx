/* eslint-disable @next/next/no-img-element */

import Header from "./components/Header";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import ImagesRestaurant from "./components/ImagesRestaurant";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

type Props = {};

export default function RestaurantDetails({}: Props) {
  return (
    <>
      <Header />
      {/* DESCRIPTION PORTION */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavbar />
          <Title />
          <Rating />
          <Description />
          <ImagesRestaurant />
          <Reviews />
        </div>
        <div className="w-[27%] relative text-reg">
          <ReservationCard />
        </div>
      </div>
    </>
  );
}
