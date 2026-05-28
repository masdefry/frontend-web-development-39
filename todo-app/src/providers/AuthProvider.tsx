import useAuthStore from '@/stores/useAuthStore';
import axiosInstance from '@/utils/axios-instance';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export default function AuthProvider() {
  const { users, setAuth } = useAuthStore();

  const onSessionLogin = async () => {
    try {
      const res = await axiosInstance.get(`data/Users/${users?.objectId}`);

      setAuth({
        name: res?.data?.name,
        email: res?.data?.email,
        objectId: res?.data?.objectId,
      });
    } catch (error) {
      if (error instanceof AxiosError)
        toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    onSessionLogin();
  }, [users?.objectId]);

  return <Outlet />;
}
