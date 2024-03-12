export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center sm:p-24">
      <div className="flex flex-col items-center justify-center rounded-3xl bg-[#1e4820] w-96">
        <form className="flex flex-col sm:p-10">
          <div className="flex items-center justify-between py-2">
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" className="bg-[#153517] rounded-md ml-6 h-8"/>
          </div>

          <div className="flex items-center justify-between py-2">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" className="bg-[#153517] rounded-md ml-6 h-8"/>
          </div>

          <div className="flex justify-center items-center space-x-6 pt-6">
            <button type="button" className="flex min-w-28 bg-zinc-900 rounded-2xl py-2 px-4 items-center justify-center">Cadastrar</button>

            <a href="/user">
              <button type="button" className="flex min-w-28 bg-zinc-900 rounded-2xl py-2 px-4 items-center justify-center">Entrar</button>
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
