import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useAuthActions } from "@convex-dev/auth/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { SigtnInFlow } from "../types";

interface SingInCardProps {
  setState: (state: SigtnInFlow) => void;
}

export const SingInCard = ({ setState }: SingInCardProps) => {
  const { signIn } = useAuthActions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onProviderSignIn = (value: "github" | "google") => {
    signIn(value);
  };

  return (
    <Card className="w-full h-full p-8 ">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-bold">Login to continue</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
        <CardContent className="space-y-4 px-0 pb-0">
          <form action="" className="space-y-2.5">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={false}
                />
              </div>
              <div className="space-y-1.5 mt-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={false}
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-4"
                size="lg"
                disabled={false}
              >
                Continue
              </Button>
            </div>
          </form>

          <Separator />

          <div className="flex flex-col gap-2 items-center justify-center">
            <Button
              onClick={() => onProviderSignIn("google")}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FcGoogle className="size-5 absolute top-2.5 left-2.5 cursor-pointer" />
              Continue with Google
            </Button>
            <Button
              onClick={() => onProviderSignIn("github")}
              variant="outline"
              size="lg"
              className="w-full relative"
            >
              <FaGithub className="size-5 absolute top-2.5 left-2.5 cursor-pointer" />
              Continue with GitHub
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Don&apos;t have an account?{" "}
            <span
              className="text-sky-700 hover:underline cursor-pointer"
              onClick={() => setState("signUp")}
            >
              Sign up
            </span>
          </p>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
