import {
  Bank,
  Buildings,
  ChartBar,
  CurrencyCircleDollar,
  Notepad,
  Receipt,
  Scales,
  User,
  Users,
} from '@phosphor-icons/react';
import { NavItem } from './NavItem';

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 w-72 fixed left-0 top-14 bottom-0 p-2 bg-white">
      <nav className="mt-9 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-400 font-medium text-sm px-3">
            TRANSAÇÕES
          </strong>

          <div className="text-sm flex flex-col">
            <NavItem title="Entrada" icon={CurrencyCircleDollar} />
            <NavItem title="Saida" icon={CurrencyCircleDollar} />
            <NavItem title="Transferêcia" icon={CurrencyCircleDollar} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <strong className="text-zinc-400 font-medium text-sm px-3">
            MENU
          </strong>

          <div className="text-sm flex flex-col">
            <NavItem path="/" title="Painel" icon={ChartBar} />
            <NavItem path="/livro-diario" title="Livro diário" icon={Notepad} />
            <NavItem
              path="/fluxo-de-caixa"
              title="Fluxo de caixa"
              icon={Receipt}
            />
            <NavItem path="/comparador" title="Comparador" icon={Scales} />
            <NavItem path="/bancos" title="Bancos" icon={Bank} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <strong className="text-zinc-400 font-medium text-sm px-3">
            CONFIGURAÇÕES
          </strong>

          <div className="text-sm flex flex-col">
            <NavItem path="/empresas" title="Empresas" icon={Buildings} />
            <NavItem path="/usuarios" title="Usuários" icon={Users} />
            <NavItem path="/meu-perfil" title="Minha conta" icon={User} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
