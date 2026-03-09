import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "BookNest",
  description: "Discover your next favorite book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Navbar />

          <main className="grow">{children}</main>

          <Footer />

          {/* Toast Notification */}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}