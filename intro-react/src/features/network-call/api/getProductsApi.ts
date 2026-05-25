import axiosInstance from '@/utils/axios-instance';
import { type AxiosResponse } from 'axios';
import type { NetworkCall } from '@/features/network-call/types/networkcall-type';

export async function getProductsApi(): Promise<NetworkCall[]> {
  const res: AxiosResponse<NetworkCall[]> =
    await axiosInstance.get('data/Products');

  return res?.data;
}
