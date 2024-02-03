export function LoginPage() {
  return (
    <form className="flex flex-col w-full">
      <div className="pb-4">
        <h1 className="text-3xl font-bold  text-green-950">Login</h1>
        <p className="text-zinc-600 text-sm pt-2">Entre com suas credenciais</p>
      </div>

      <div className="grid grid-cols-form gap-2 pt-5">
        <label htmlFor="email" className="text-xs font-medium text-zinc-600">
          E-mail
        </label>
        <input
          id="email"
          type="text"
          className="border border-slate-400 rounded  focus:outline-green-900 px-4 py-2 text-sm"
        />
      </div>
      <div className="grid grid-cols-form gap-2 pt-5">
        <label htmlFor="password" className="text-xs font-medium text-zinc-600">
          Senha
        </label>
        <input
          id="password"
          type="password"
          className="border border-slate-400 rounded  focus:outline-green-900 px-4 py-2 text-sm"
        />
      </div>

      <div className="py-4 text-right">
        <a
          href="#"
          className="text-green-900 text-sm hover:underline hover:text-green-950 font-medium"
        >
          Esqueceu a senha?
        </a>
      </div>

      <button className="bg-green-800 h-10 mt-4 rounded text-white hover:bg-green-900 text-sm font-bold">
        Entrar
      </button>
    </form>
  );
}
