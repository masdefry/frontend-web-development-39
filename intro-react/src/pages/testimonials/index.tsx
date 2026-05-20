import TestimonialCard from "../../features/testimonials/components/TestimonialCard";

const testimonialsData = [
  {
    imageUrl: '/images/avatar.png',
    userName: 'Ivan Jenner',
    status: 'Verified Graduate',
    highlight:
      'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    description:
      'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
    style: 'bg-indigo-700 text-white col-span-2',
  },
  {
    imageUrl: '/images/avatar1.png',
    userName: 'Jordi Amat',
    status: 'Verified Graduate',
    highlight: 'Ok.',
    description: 'Ok.',
    style: 'bg-gray-800 text-white',
  },
  {
    imageUrl: '/images/avatar2.png',
    userName: 'Jeanette Harmon',
    status: 'Verified Graduate',
    highlight: 'An overall wonderful and rewarding experience',
    description:
      'Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.',
    style: 'bg-white text-gray-800',
  },
  {
    imageUrl: '/images/avatar3.png',
    userName: 'Patrick Abrams',
    status: 'Verified Graduate',
    highlight:
      'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
    description:
      'The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.',
    style: 'bg-black text-white col-span-2',
  },
  {
    imageUrl: '/images/avatar4.png',
    userName: 'Kira Whittle',
    status: 'Verified Graduate',
    highlight: 'Such a life-changing experience. Highly recommended!',
    description:
      'Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!',
    style: 'bg-white text-gray-800 col-start-4 col-end-5 row-start-1 row-end-3',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <div className='grid grid-cols-1 gap-3 bg-gray-100 p-3 lg:grid-cols-4'>
        
        {/* Card */}
        {testimonialsData.map((item) => (
          <TestimonialCard  
            style={item?.style}
            userName={item?.userName}
            imageUrl={item?.imageUrl}
            highlight={item?.highlight}
            description={item?.description}
            status={item?.status}
          />
        ))}
      </div>
    </>
  );
}
