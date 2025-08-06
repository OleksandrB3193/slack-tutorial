"use client";

import { useState } from "react";

import { SigtnInFlow } from "../types";
import { SingInCard } from "./SingInCard";
import { SingUpCard } from "./SingUpCard";

export const AuthScreen = () => {
  const [state, setState] = useState<SigtnInFlow>("signIn");
  return (
    <div className="h-screen flex  items-center justify-center bg-[#5c3b58]">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SingInCard setState={setState} />
        ) : (
          <SingUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};
