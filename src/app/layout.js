import "./globals.css";

export const metadata = {
  title: "Givento-card",
  description: "Givento cards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
