export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex items-center justify-between bg-blue-950 px-10 py-4 max-h-24">
          <a href="/user">
            <div className="bg-white h-14 w-14 rounded-full"></div>
          </a>
          <div className="flex space-x-3">
            <a href="/user" className="border-b-2 border-transparent hover:border-b-2 hover:border-b-white duration-300">Início</a>
            <a href="/user/option" className="border-b-2 border-transparent hover:border-b-2 hover:border-b-white duration-300">Opções</a>
            <a href="/user/Victor" className="border-b-2 border-transparent hover:border-b-2 hover:border-b-white duration-300">Perfil</a>
            <a href="/" className="border-b-2 border-transparent hover:border-b-2 hover:border-b-white duration-300">Sair</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}