import React from "react";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";

export const metadata = {
  title: 'Opentable | RestaurantMenu'
}

type Props = {};

export default function RestaurantMenu({}: Props) {
  return (
    <>
      
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavbar />
          <Menu />
        </div>
    </>
  );
}
