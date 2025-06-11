import Header from "@/components/Header";
import "./globals.css";
import UserHeader from "@/components/UserHeader";

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
        <UserHeader/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
