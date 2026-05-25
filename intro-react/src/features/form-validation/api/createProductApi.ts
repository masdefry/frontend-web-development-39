import axiosInstance from '@/utils/axios-instance';
import type { AxiosResponse } from 'axios';
import type { InputCreateProduct } from '@/features/form-validation/types/formvalidation-type';

export default async function createProductApi({
  name,
  price,
  stocks,
  imageUrl,
}: InputCreateProduct) {
  const res: AxiosResponse<any, InputCreateProduct> = await axiosInstance.post(
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
