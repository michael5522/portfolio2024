import { mySelfie } from "../assets/images";
import Image from "next/image";

const About = () => {
  return (
    <section
      id='about'
      className='flex justify-between items-center max-lg:flex-col w-full min-h-screen max-container max-sm:min-h-half'
    >
      <h2 className='hidden font-palanquin text-3xl pt-9 capitalize max-sm:flex max-sm:text-[50px] max-sm:leading-[39px] font-bold max-sm:tracking-tight'>
        About Me
      </h2>
      <div className="hidden max-sm:flex">
        <Image
          src={mySelfie}
          alt="self pic"
          width={250}
          height={322}
          className="object-contain bg-ryzen bg-no-repeat bg-center bg-contain rounded"
        />
      </div>

      <div className="flex-1 flex justify-end items-center max-sm:hidden">
        <Image
          src={mySelfie}
          alt="self pic"
          width={400}
          height={472}
          className="object-contain bg-ryzen bg-no-repeat bg-center bg-contain rounded"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin capitalize text-8xl font-bold lg:max-w-lg max-sm:hidden'>
          About Me
        </h2>
        <p className="lg:max-w-lg mt-4 ml-3 info-text max-sm:text-base max-sm:leading-[24px]">
          Hi, I'm Michael, and I enjoy working in front-end web development using javascript, reactjs and am experienced in creating dynamic, user-friendly websites. I am passionate for all things tech, programming and all things boba.
        </p>
        <p className="lg:max-w-lg mt-6 ml-3 info-text max-sm:text-base max-sm:mt-3 max-sm:mb-7 max-sm:leading-[24px]">
          In my free time, I enjoy being outdoors in the sun, and spending time exploring new places. I've recently ran a half marathon and that was something I'd rather not do again.
        </p>
      </div>

    </section>
  );
};

export default About;
