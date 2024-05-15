"use client";

import React, { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => (
  <main className="flex min-h-screen flex-col justify-between bg-no-repeat bg-hero-planet">
    {children}
  </main>
);

export default Main;
