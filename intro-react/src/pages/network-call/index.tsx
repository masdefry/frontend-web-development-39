import type { NetworkCall } from '@/features/network-call/types/networkcall-type';
import axiosInstance from '@/utils/axios-instance';
import { AxiosError, type AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export default function NetworkCallPage() {
  const [products, setProducts] = useState<NetworkCall[]>([]);
  const [getProductsLoading, setGetProductsLoading] = useState<boolean>(true);

  const onGetProducts = async () => {
    try {
      // await fetch('url', { method: 'GET' })
      //   const res = await axios.get(
      //     `${import.meta.env.VITE_BACKENDLESS_API_URL}/${import.meta.env.VITE_BACKENDLESS_APPLICATION_ID}/${import.meta.env.VITE_BACKENDLESS_API_KEY}/data/Products`,
      //   );

      const res: AxiosResponse<NetworkCall[]> =
        await axiosInstance.get('data/Products');

      setProducts(res.data);
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

  if (getProductsLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Toaster />
      <div className='flex justify-center mt-10'>
        <div className='w-3xl  overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                </th>
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stocks</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {products?.map((product) => (
                <tr key={product?.objectId}>
                  <th>
                    <label>
                      <input type='checkbox' className='checkbox' />
                    </label>
                  </th>
                  <td>1.</td>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle h-12 w-12'>
                          <img
                            src={product?.imageUrl}
                            alt='Avatar Tailwind CSS Component'
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product?.name}</td>
                  <td>{product?.price}</td>
                  <td>{product?.stocks}</td>
                  <th>
                    <button className='btn btn-ghost btn-xs'>details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
