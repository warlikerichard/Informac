import Header from "@/components/Header";
import "./globals.css";
import UserHeader from "@/components/UserHeader";
import Providers from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-zinc-800"
      >
        <Providers>
          <UserHeader/>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}

