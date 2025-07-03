"use client";
import Link from "next/link";
import React from "react";

interface IInput {
  input: string;
  href: string;
}

export default function ButtonLink({ input, href }: IInput) {
  return (
    <Link href={href}>
      <button className="button">{input}</button>
    </Link>
  );
}
