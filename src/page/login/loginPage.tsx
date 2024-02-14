import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';
import { fecthLogin } from '../../api/auth';
import { Logo } from '../../components/logo';
import { AuthContext } from '../../context/authContext';

const loginForm = z.object({
  email: z.string().email().min(1, 'Campo obrigatório'),
  password: z.string().min(1, 'Campo obrigatório'),
});

type LoginForm = z.infer<typeof loginForm>;

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState: { isSubmitting },
  } = useForm<LoginForm>({ resolver: zodResolver(loginForm) });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { mutateAsync: authenticate } = useMutation({ mutationFn: fecthLogin });

  async function handleLogin(data: LoginForm) {
    try {
      loginForm.parse(data);
      const response = await authenticate(data);
      login(response.data.accessToken);
      // const user = await fecthUserProfile(response.data.accessToken);
      // setUser(user.data);
      navigate('/');
      toast.success('Login feito com sucesso');
    } catch (error) {
      toast.error('Erro ao fazer login');
    }
  }

  return (
    <form
      className="flex flex-col w-[380px] bg-white p-6 rounded-md shadow-md"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="pb-4">
        <Logo />
        <p className="text-zinc-600 text-sm pt-2">Entre com suas credenciais</p>
      </div>

      <div className="grid grid-cols-form gap-2 pt-5">
        <label htmlFor="email" className="text-xs font-medium text-zinc-600">
          E-mail
        </label>
        <input
          type="text"
          {...register('email')}
          className="border border-slate-400 rounded  focus:outline-cyan-600 px-4 py-2 text-sm"
        />

        {errors.email && (
          <span className="text-red-500 text-xs">Campo obrigatório</span>
        )}
      </div>
      <div className="grid grid-cols-form gap-2 pt-5">
        <label htmlFor="password" className="text-xs font-medium text-zinc-600">
          Senha
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className="border border-slate-400 rounded  focus:outline-cyan-600 px-4 py-2 text-sm"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">Campo obrigatório</span>
        )}
      </div>

      <div className="py-4 text-right">
        <a
          href="#"
          className="text-zinc-900 text-sm hover:underline hover:text-zinc-900 font-medium"
        >
          Esqueceu a senha?
        </a>
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-cyan-600 h-10 mt-4 rounded text-white hover:bg-cyan-700 text-sm font-bold"
      >
        Entrar
      </button>
    </form>
  );
}
