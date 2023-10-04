import "./globals.css";
import { Karla } from "next/font/google";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/redux/StoreProvider";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "L'original Food",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={karla.className}>
        <StoreProvider>{children}</StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
