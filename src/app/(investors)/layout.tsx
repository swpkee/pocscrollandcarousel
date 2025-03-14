export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>investor</p>
      <main>{children}</main>
      <p>investor</p>
    </>
  );
}
