const testimonialsData = [
  {
    imageUrl: '/images/avatar.png',
    userName: 'Ivan Jenner',
    status: 'Verified Graduate',
    highlight:
      'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description:
      'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    style: 'bg-indigo-700 text-white',
  },
  {
    imageUrl: '/images/avatar1.png',
    userName: 'Jordi Amat',
    status: 'Verified Graduate',
    highlight: 'Ok.',
    description: 'Ok.',
    style: 'bg-gray-800 text-white'
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <div className='grid grid-cols-1 bg-gray-100'>
        {/* Card */}

        {testimonialsData.map((item) => (
          <div className={`p-10 ${item?.style}`} key={item?.userName}>
            {/* Card: Header */}
            <div className='flex items-center gap-3'>
              <div className='w-15 h-15'>
                <img
                  src={item?.imageUrl}
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <div>
                <h1 className='text-xl font-bold'>{item?.userName}</h1>
                <p className='text-xs'>Verified Graduate</p>
              </div>
            </div>
            {/* Card: Highlight */}
            <p className='font-bold mt-5'>{item?.highlight}</p>

            {/* Card: Description */}
            <p className='mt-5 text-sm'>“{item?.description}”</p>
          </div>
        ))}
      </div>
    </>
  );
}
