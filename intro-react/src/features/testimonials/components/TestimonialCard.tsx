import type { Testimonials } from "../types/testimonials-type";

export default function TestimonialCard(props: Testimonials) {
  return (
    <div className={`p-10 rounded-md ${props?.style}`}>
      {/* Card: Header */}
      <div className='flex items-center gap-3'>
        <div className='w-15 h-15'>
          <img
            src={props?.imageUrl}
            className='w-full h-full object-cover rounded-full'
          />
        </div>
        <div>
          <h1 className='text-xl font-bold'>{props?.userName}</h1>
          <p className='text-xs'>{props?.status}</p>
        </div>
      </div>
      {/* Card: Highlight */}
      <p className='font-bold mt-5'>{props?.highlight}</p>

      {/* Card: Description */}
      <p className='mt-5 text-sm'>“{props?.description}”</p>
    </div>
  );
}
