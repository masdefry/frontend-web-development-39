import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import createProductSchema from '@/features/form-validation/schemas/createProductSchema';
import type { InputCreateProduct } from '@/features/form-validation/types/formvalidation-type';
import createProductApi from '@/features/form-validation/api/createProductApi';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

export default function useCreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputCreateProduct>({
    resolver: zodResolver(createProductSchema),
  });

  const onCreateProduct = async ({
    name,
    price,
    stocks,
    imageUrl,
  }: InputCreateProduct) => {
    try {
      const createdProduct = await createProductApi({
        name,
        price,
        stocks,
        imageUrl,
      });

      toast.success(`Create product: ${createdProduct?.name} is success`);
    } catch (error) {
      if (error instanceof AxiosError)
        toast.error(error?.response?.data?.message);
    }
  };

  return {
    register, 
    handleSubmit, 
    errors, 
    onCreateProduct
  }
}
