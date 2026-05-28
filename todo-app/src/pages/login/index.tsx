import type { InputLoginUser } from '@/features/login/types/login-type';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUserSchema } from '@/features/login/schemas/loginUserSchema';
import axiosInstance from '@/utils/axios-instance';
import useAuthStore from '@/stores/useAuthStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputLoginUser>({
    resolver: zodResolver(loginUserSchema),
  });

  const onLoginUser = async ({ email, password }: InputLoginUser) => {
    try {
      const res = await axiosInstance.post('users/login', {
        login: email,
        password,
      });

      toast.success('Login user successfully')
      setAuth(res?.data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-lg py-10'>
          <h1 className='text-gray-800 font-bold text-2xl'>Login Account</h1>
          <p className='text-gray-500 text-sm'>
            Please enter your email and password to log in.
          </p>
          <form onSubmit={handleSubmit(onLoginUser)} className='mt-3'>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Type your email:</legend>
              <input
                {...register('email')}
                type='text'
                className='input border border-gray-300 w-full'
                placeholder='user@gmail.com'
              />
              <p className='label text-red-500'>
                {errors?.email && errors?.email?.message}
              </p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Type your password:</legend>
              <input
                {...register('password')}
                type='password'
                className='input border border-gray-300 w-full'
                placeholder='....................................'
              />
              <p className='label text-red-500'>
                {errors?.password && errors?.password?.message}
              </p>
            </fieldset>
            <button className='btn bg-indigo-500 border-none w-full mt-3 text-white hover:bg-indigo-800'>
              Login Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
