import { ComponentProps } from 'react';

interface InputPrefxProps extends ComponentProps<'div'> {}

export function InputPrefix(props: InputPrefxProps) {
  return <div {...props} />;
}

interface InputControlProps extends ComponentProps<'input'> {}

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-1 bg-transparent p-0 text-zinc-900 placeholder-zinc-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
      {...props}
    />
  );
}

export interface InputRootProps extends ComponentProps<'div'> {}

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus:outline-none "
      {...props}
    />
  );
}
