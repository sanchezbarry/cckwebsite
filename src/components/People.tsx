import React from 'react';

const leaders = [
  {
    name: "Rev. Bertram",
    role: "Vicar",
    description: "Revd Bertram has a deep desire to make Scripture come alive for people, and then watch them soar in the Lord.  Other than that, he enjoys most films from Pixar or Dreamworks, and confesses to a soft spot for tea and chocolates (Don't let his doctor find out!).",
    image: "/web1.jpg"
  },
  {
    name: "Carol Seow",
    role: "Administrative Executive",
    description: "Ever ready to ensure all is running well at CCK. Our administrator will be glad to hear from you and assist in any way possible.",
    image: "/web2.jpg"
  },
  {
    name: "Brenda",
    role: "Administrative Executive",
    description: "Ever ready to ensure all is running well at CCK. Our administrator will be glad to hear from you and assist in any way possible.",
    image: "/web3.jpg"
  },
  {
    name: "Amos Chen",
    role: "Pastoral Worker",
    description: "Seeking to cultivate a vibrant spiritual life in the church through small groups and education so CCK members would be supported to fulfill the Great Commandment (Love God and Man) and the Great Commission (Make Disciples) in their personal lives.",
    image: "/web4.jpg"
  },
    {
    name: "Revd Steven Seah",
    role: "Missionary Priest",
    description: "Elena coordinates our music and creative arts, leading the congregation in heartfelt worship every Sunday.",
    image: "/web5.jpg"
  },
  {
    name: "Yvonne Pan",
    role: "Children’s Ministry Worker",
    description: "Walks with every child to develop a heart that loves God. Inculcate godly values to the next generation, inspiring and encouraging them to keep their relationship with God strong and vibrant!",
    image: "/web6.jpg"
  },
];

const People: React.FC = () => {
  return (
    <section className="w-full max-w-240 px-4 md:px-10 py-16">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight">Meet Our Leadership</h2>
        <p className="text-gray-600 dark:text-gray-400">The team dedicated to serving you and our community.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {leaders.map((leader, index) => (
          <div key={index} className="group flex flex-col gap-3">
            <div className="aspect-3/4 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${leader.image}')` }}
                role="img"
                aria-label={`Portrait of ${leader.name}`}
              ></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">{leader.name}</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-wide mb-1">{leader.role}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                {leader.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default People;