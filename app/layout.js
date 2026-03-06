import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "BookNest",
  description: "Discover your next favorite book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">

        <Navbar />

        <main className="grow">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}