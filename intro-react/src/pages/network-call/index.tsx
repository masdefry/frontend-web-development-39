import useGetProducts from '@/features/network-call/hooks/useGetProducts';
import { Toaster } from 'react-hot-toast';
export default function NetworkCallPage() {
  const { getProductsLoading, products } = useGetProducts();

  // Conditional Rendering
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
