import Navbar from "@/app/components/Navbar";
import React from "react";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";

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
