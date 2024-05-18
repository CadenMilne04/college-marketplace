import "./globals.css";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "College Marketplace",
  description: "A place to buy and sell lightly used goods from other students from your University or College.",
  icon: "./favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="font-mono px-2">
            <NavigationBar />
            {children}
            <Footer />
        </body>
    </html>
  );
}
