import "./global.css"; // Подключение Tailwind

export default function RootLayout({
  children,
}) {
  return (
    <html lang="ru">
      <body suppressHydrationWarning className="bg-[#1E2222] text-white antialiased">
        {children}
      </body>
    </html>
  );
}