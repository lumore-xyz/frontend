"use client";
import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiBan, HiOutlineBadgeCheck } from "react-icons/hi";
import { TbFidgetSpinner } from "react-icons/tb";
import { useLocation } from "../context/LocationProvider";
import { useCheckUsername, useSignup } from "../hooks/useAuth";
import { useDebounce } from "../hooks/useDebounce";

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const debouncedUsername = useDebounce(formData.username, 1000); // Debounce input
  const { data: isAvailable, isLoading } = useCheckUsername(debouncedUsername); // Query API only after debounce delay

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { mutate, isError } = useSignup();
  const { longitude, latitude, error: locationError } = useLocation();

  useEffect(() => {
    if (locationError) {
      toast.error("Please allow location access to continue");
    }
  }, [locationError]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { username: "", email: "", password: "" };

    const { username, email, password } = formData;

    const usernameRegex = /^(?!.*\.{2})(?!.*\.$)[a-zA-Z0-9._]+$/; // Allows letters, numbers, underscores, and single dots
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

    if (!username) {
      newErrors.username = "username is required";
      valid = false;
    } else if (!usernameRegex.test(username)) {
      newErrors.username =
        "Invalid format. Only letters, numbers, underscores, and single dots allowed";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      mutate(
        {
          ...formData,
          location: {
            type: "Point",
            coordinates: [longitude || 0, latitude || 0],
            formattedAddress: "",
          },
        },
        {
          onSuccess: (data) => {
            console.log("Logedin :", data);
            router.push("/app"); // Redirect after login
          },
        }
      );
    }
  };

  // Function to handle Google login
  const handleGoogleLogin = () => {
    const GOOGLE_AUTH_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Image
        src="/assets/lumore-hr.svg"
        alt="Lumore"
        height="100"
        width="100"
        className="mx-auto"
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>
            Get, Set, Go!! Ready to meet new friend
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-sm"
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="text-sm"
                    required
                  />
                  <span className="absolute right-3 top-[10px] text-gray-500">
                    {isLoading ? (
                      <TbFidgetSpinner className="animate-spin" />
                    ) : isAvailable ? (
                      <HiOutlineBadgeCheck className="text-green-700" />
                    ) : (
                      <HiBan className="text-red-500" />
                    )}
                  </span>
                </div>
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="flex relative items-center justify-between">
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-[10px] text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              {isError && (
                <p className="text-red-500 text-sm">
                  Invalid credentials, please try again.
                </p>
              )}
              <Button type="submit" className="w-full">
                Signup
              </Button>
            </div> */}
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full mt-2 text-lg p-6"
            >
              <Icon name="FcGoogle" className="!text-2xl !h-6 !w-6" />
              Login with Google
            </Button>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="/app/login" className="underline underline-offset-4">
                login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
