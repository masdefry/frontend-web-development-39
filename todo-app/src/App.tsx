import { IoMoonSharp } from 'react-icons/io5';
import { MdOutlineClose } from 'react-icons/md';
export default function HomePage() {
  return (
    <>
      <div className='w-screen h-screen bg-gray-200'>
        <div className='relative'>
          <div className="bg-[url('/images/background-banner.png')] bg-center h-50">
            <div className='bg-linear-to-br from-indigo-500/70 via-purple-500/70 to-pink-500/10 h-50'></div>
          </div>
          <div className='absolute top-10 w-screen flex justify-center'>
            <div className='w-72 md:w-96'>
              <div className='flex justify-between items-center text-white'>
                <h1 className='tracking-widest text-2xl'>TODO</h1>
                <IoMoonSharp className='text-2xl' />
              </div>
              <label className='input w-full mt-10'>
                <input type='radio' name='radio-2' className='radio radio-xs' />
                <input type='text' className='grow' placeholder='index.php' />
              </label>
              <ul className='list bg-base-100 rounded-sm shadow-md mt-3'>
                <li className='flex justify-between items-center p-3 border-b-2'>
                  <div className='flex items-center gap-3'>
                    <input
                      type='radio'
                      name='radio-2'
                      className='radio radio-xs'
                    />
                    <div>Dio Lupa</div>
                  </div>
                  <MdOutlineClose />
                </li>
                <li className='flex justify-between items-center p-3 border-b-2'>
                  <div className='flex items-center gap-3'>
                    <input
                      type='radio'
                      name='radio-2'
                      className='radio radio-xs'
                    />
                    <div>Dio Lupa</div>
                  </div>
                  <MdOutlineClose />
                </li>
                <li className='flex justify-between items-center p-3 border-b-2'>
                  <div className='flex items-center gap-3'>
                    <input
                      type='radio'
                      name='radio-2'
                      className='radio radio-xs'
                    />
                    <div>Dio Lupa</div>
                  </div>
                  <MdOutlineClose />
                </li>
                <li className='flex justify-between items-center text-xs text-gray-300 px-3 py-2'>
                  <h6>5 Items Left</h6>
                  <div className='hidden md:flex items-center gap-3'>
                    <h6>All</h6>
                    <h6>Active</h6>
                    <h6>Completed</h6>
                  </div>
                  <h6>Clear Completed</h6>
                </li>
              </ul>

              <div className='flex items-center gap-3 md:hidden bg-white mt-3 rounded-sm justify-center p-1 text-gray-300 text-xs'>
                <h6>All</h6>
                <h6>Active</h6>
                <h6>Completed</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
