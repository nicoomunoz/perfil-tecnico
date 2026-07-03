import "./globals.css";

export const metadata = {
  title: "Nicolás — Desarrollador Full-Stack",
  description: "Sistemas a medida para negocios que no pueden fallar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
