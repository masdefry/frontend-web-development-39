import axios from 'axios';
import { useEffect, useState } from 'react';

const BACKENDLESS_APPLICATION_ID = '80900C75-16BB-41B9-A507-BFBEB18800DB';
const BACKENDLESS_API_KEY = 'DFDA6C49-11F9-4C6A-80AC-502464A70582';

export default function NetworkCallPage() {
  useEffect(() => {
    onGetProducts();
  }, []);

  const [products, setProducts] = useState<any>([]);

  const onGetProducts = async () => {
    try {
      // await fetch('url', { method: 'GET' })
      const res = await axios.get(
        `https://api.backendless.com/${BACKENDLESS_APPLICATION_ID}/${BACKENDLESS_API_KEY}/data/Products`,
      );
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
