import { type Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { type ReactNode } from "react";
import ThemeProvider from "~/providers/ThemeProvider";
import Header from "~/ui/Header/Header";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Countries",
  description: "Alibaba Rest Countries",
};

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" dir="ltr">
      <body className={nunitoSans.className}>
        <ThemeProvider>
          <Header />
          <div className="container mx-auto py-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
