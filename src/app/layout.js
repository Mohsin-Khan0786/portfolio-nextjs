import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Mohsin Portfolio",
  description: "Mohsin Khan The Next js developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
