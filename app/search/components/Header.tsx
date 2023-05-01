import Searchbar from "@/app/components/Searchbar";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <Searchbar />
    </div>
  );
}
