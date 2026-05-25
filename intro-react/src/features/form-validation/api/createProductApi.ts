import axiosInstance from '@/utils/axios-instance';
import type { AxiosResponse } from 'axios';
import type { InputCreateProduct } from '@/features/form-validation/types/formvalidation-type';
import type { NetworkCall } from '@/features/network-call/types/networkcall-type';

export default async function createProductApi({
  name,
  price,
  stocks,
  imageUrl,
}: InputCreateProduct) {
  const res: AxiosResponse<NetworkCall, InputCreateProduct> = await axiosInstance.post(
    'data/Products',
    {
      name,
      price,
      stocks,
      imageUrl,
    },
  );

  return res?.data;
}
