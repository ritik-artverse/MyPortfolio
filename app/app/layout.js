import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "My frontend journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
