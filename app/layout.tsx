import "../public/styles/globals.css";
import { inter, clashGrotesk } from "@/configs/fonts";
import { ReactNode } from "react";
import { cn } from "@/utils/utils";
import Header from "@/common/header/header";
import Main from "@/common/main/main";
import Footer from "@/common/footer/footer";

type Props = {
  children: Readonly<ReactNode>;
};

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth", inter.variable, clashGrotesk.variable)}
    >
      <body className="w-full min-h-screen font-inter m-auto bg-scroll">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <Main>{children}</Main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
