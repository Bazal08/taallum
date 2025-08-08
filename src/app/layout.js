import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/components/shared/StyledComponentsRegistry";
import { Providers } from "@/redux/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Plus One | Your Perfect Plus One, On Demand",
  description:
    "Transform any occasion into a memorable experience with a carfully matched companion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        data-new-gr-c-s-check-loaded="14.1220.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true"
      >
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
