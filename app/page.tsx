import Counter from "@/components/Counter";
import Image from "next/image";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className=" flex flex-col justify-start items-stretch text-black">
      <div className=" bg-gradient-to-r from-[#FFABDA] to-[#5009DE] h-48 rounded-2xl border">
        <div className=" px-10 relative w-full h-full top-1/2 flex flex-row items-stretch justify-start">
          <div className=" h-full w-48 border border-pink-100 rounded-full">

          </div>
          <div className=" flex-1 px-2 flex flex-col justify-start items-start">
            <div className=" flex-1 w-full">
            </div>
            <div className=" flex-1 flex flex-col items-start justify-around">
              <span className=" font-medium text-[24px]">Tanmay Bhosale</span>
              <span className=" font-light text-[14px]">Software Engineer @ Principal</span>
              <div className="flex flex-row justify-start items-start">
                <span className=" flex flex-row items-center rounded-full p-1 font-light text-[11px] mr-2 bg-bg-accent">
                  <CiLocationOn className=" mr-1" /> Pune, India
                </span>
                <span className=" flex flex-row items-center rounded-full p-1 font-light text-[11px] mr-2 bg-bg-accent">
                <CiMail className=" mr-1" /> tanmaybhosale24@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-start items-stretch px-10 relative top-40">
        <section className=" flex flex-col justify-start items-stretch">
          <p className=" font-medium text-[20px]">Stats:</p>
          <div className=" relative h-28 mt-5 flex flex-row items-stretch justify-between">
            <div className=" w-fit flex flex-col justify-center items-center">
              <Counter className=" font-semibold text-[64px]" from={0} to={10} />
              <span className=" relative bottom-0">Projects</span>
            </div>
            
            <div className=" w-fit flex flex-col justify-center items-center">
              <Counter className=" font-semibold text-[64px]" from={0} to={2.5} decimal={1} />
              <span className=" relative bottom-0">Years of experience</span>
            </div>

            <div className=" w-fit flex flex-col justify-center items-center">
              <Counter className=" font-semibold text-[64px]" from={0} to={20} symbol="+"/>
              <span className=" relative bottom-0">Technologies & Tools</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
