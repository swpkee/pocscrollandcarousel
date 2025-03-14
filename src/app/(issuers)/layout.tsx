export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>issuer</p>
      <main>{children}</main>
      <p>issuer</p>
    </>
  );
}
