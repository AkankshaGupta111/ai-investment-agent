import "./globals.css";

export const metadata = {
  title: "AI Investment Research Agent",
  description: "AI Powered Investment Research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}