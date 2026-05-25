import { getProductsApi } from '@/features/network-call/api/getProductsApi';
import type { NetworkCall } from '@/features/network-call/types/networkcall-type';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function useGetProducts() {
  const [products, setProducts] = useState<NetworkCall[]>([]);
  const [getProductsLoading, setGetProductsLoading] = useState<boolean>(true);

  const onGetProducts = async () => {
    try {
      const productsData = await getProductsApi();

      setProducts(productsData);
    } catch (error) {
      if (error instanceof AxiosError)
        toast.error(error?.response?.data?.message);
    } finally {
      setGetProductsLoading(false);
    }
  };

  useEffect(() => {
    onGetProducts();
  }, []);

  return {
    getProductsLoading,
    products,
  };
}
