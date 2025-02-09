import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "../public/plugins/bootstrap/css/bootstrap.min.css";
import "../public/plugins/bootstrap-icons/bootstrap-icons.css";
import "../public/plugins/boxicons/css/boxicons.min.css";
import "../public/plugins/glightbox/css/glightbox.min.css";
import "../public/plugins/swiper/swiper-bundle.min.css";
import "../public/css/style.css";
import BodyScripts from "@/components/BodyScripts";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "Nova Ardiansyah | Passionate Web Developer and Mobile Developer | Problem Solver & Tech Enthusiast",
  description: "Experienced Web Developer and Mobile Developer specializing in solving complex problems and creating innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>
        {children}
        <BodyScripts />
      </body>
    </html>
  );
}
