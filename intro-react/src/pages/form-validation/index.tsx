import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import createProductSchema from '@/features/form-validation/schemas/createProductSchema';

type InputCreateProduct = {
  name: string;
  price: number;
  stocks: number;
  imageUrl: string;
};

export default function FormValidationPage() {
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
    console.log('>>>');
  };

  return (
    <>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit(onCreateProduct)} className='w-lg'>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product name:</legend>
            <input
              type='text'
              {...register('name')}
              className='input w-full border border-gray-300'
              placeholder='Type here'
            />
            <p className='label'>{errors?.name && errors?.name?.message}</p>
          </fieldset>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product price:</legend>
            <input
              type='number'
              {...register('price', { valueAsNumber: true })}
              className='input w-full border border-gray-300'
              placeholder='Type here'
            />
            <p className='label'>{errors?.price && errors?.price?.message}</p>
          </fieldset>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product stock:</legend>
            <input
              type='number'
              {...register('stocks', { valueAsNumber: true })}
              className='input w-full border border-gray-300'
              placeholder='Type here'
            />
            <p className='label'>{errors?.stocks && errors?.stocks?.message}</p>
          </fieldset>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product image url:</legend>
            <input
              type='text'
              {...register('imageUrl')}
              className='input w-full border border-gray-300'
              placeholder='Type here'
            />
            <p className='label'>
              {errors?.imageUrl && errors?.imageUrl?.message}
            </p>
          </fieldset>
          <button className='btn btn-outline w-full'>Save Product</button>
        </form>
      </div>
    </>
  );
}
