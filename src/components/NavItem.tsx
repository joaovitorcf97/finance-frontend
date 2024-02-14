import { IconProps } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export interface NavItemProps {
  path?: string;
  title: string;
  icon: React.ForwardRefExoticComponent<IconProps>;
}

export function NavItem({ path, title, icon: Icon }: NavItemProps) {
  return (
    <Link
      to={path!}
      className={`group flex items-center gap-3 rounded px-6 py-3 hover:bg-cyan-50 ${
        path === location.pathname ? 'bg-cyan-50' : ''
      }`}
    >
      <Icon
        weight="fill"
        className={`h-6 w-6 group-hover:text-cyan-600 ${
          path === location.pathname ? 'text-cyan-600' : 'text-zinc-700'
        }`}
      />
      <span
        className={`font-medium group-hover:text-cyan-600 ${
          path === location.pathname ? 'text-cyan-600' : 'text-zinc-700'
        }`}
      >
        {title}
      </span>
    </Link>
  );
}
