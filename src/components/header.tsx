import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { Logo } from './logo';

export function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className="fixed top-0 left-0 right-0 px-8 py-3 border-b border-zinc-200 bg-white flex items-center justify-between">
      <Logo />
      <div className="flex items-center">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center justify-center gap-6 cursor-pointer outline-none">
              {user === undefined ? (
                <p>Carregando...</p>
              ) : (
                <div className="flex flex-col justify-start items-end">
                  <p className="text-zinc-400">{user?.name}</p>
                  <p className="text-zinc-400 text-sm">{user?.email}</p>
                </div>
              )}

              <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
                {/* <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
              /> */}
                <Avatar.Fallback
                  className="rounded-full border border-cyan-800 bg-cyan-400/10  text-cyan-400 flex h-full w-full items-center justify-center font-medium text-sm hover:border-cyan-400 transition-colors"
                  delayMs={600}
                >
                  CT
                </Avatar.Fallback>
              </Avatar.Root>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="min-w-[220px] bg-white mt-3 mr-6 shadow-md border border-zinc-200 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
              <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                New Tab
              </DropdownMenu.Item>

              <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                New Tab
              </DropdownMenu.Item>

              <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                New Tab
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}
