"use client";

import Hero from "@/sections/Hero";
import Menu from "@/sections/Menu";

import { useSelector } from "react-redux";
export default function Home() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <main>
      <Hero />
      <Menu />
    </main>
  );
}
