import Link from "next/link";
import React from "react";

type Props = {};

export default function RestaurantNavbar({}: Props) {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/milestones-grill" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/milestones-grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
