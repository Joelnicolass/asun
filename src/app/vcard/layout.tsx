export const metadata = {
  title: "Contact ASUN",
  description: "Contact ASUN - Francisco E. Macheo Lorca",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
