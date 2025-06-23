import Image from 'next/image';


export default function Hero() {
  return (
    <section className="text-center sm:text-left">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
        Hi, I'm Aarushi Daksh
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Full Stack Developer | MERN | React Native | 3D Web Experiences
      </p>
      <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full align-middle overflow-hidden border-4 border-white dark:border-white shadow-xl">
        <Image
          src="/1.jpeg" 
          alt="Aarushi Daksh"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
