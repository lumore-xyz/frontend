import type { Metadata } from "next";
import MobileNav from "./components/MobileNav";
import GeneralHeader from "./components/headers/General";
import Provider from "./context";

export const metadata: Metadata = {
  title: "Lumore - Help's you socialize your way!",
  description:
    "Lumore connects you instantly with like-minded people through real-time, anonymous chat, eliminating endless swiping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <div className="flex flex-col h-screen">
        <GeneralHeader />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <MobileNav />
      </div>
    </Provider>
  );
}
