/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";

type Props = {};

export default function Reserve({}: Props) {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
}
