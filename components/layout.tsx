"use client"

import Link from "next/link"
import {useState} from "react"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx"
import {AnimatePresence, AnimationProps, motion, Variants} from "framer-motion"

const navLinks = [{
    name: "Home",
    link: "/"
  },{
    name: "Projects",
    link: "/projects"
  },{
    name:"Experience",
    link:"/experience"
  },{
    name:"Stats",
    link:"/stats"
  }
  ]

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    const [isNavOpen,setIsNavOpen] = useState(true)
  const toggleNav = ()=> setIsNavOpen(!isNavOpen)
    return(
        <div className="bg-bg min-h-screen max-h-fit flex flex-row items-stretch justify-evenly">
          <AnimatePresence
            initial={false}
            mode="wait"
          >
            {isNavOpen && <motion.nav initial="hidden" animate="visible" exit="exit" variants={navVariants} className=" rounded-r-2xl flex flex-col justify-start items-center bg-bg-accent w-[20%]">
                <div className="flex flex-row justify-end w-full p-2">
                  <RxCross2 onClick={toggleNav}  size={18} className=" hover:cursor-pointer text-black font-normal" />
                </div>
                <div className=" mt-20 h-full flex flex-col justify-start items-start">
                  {
                    navLinks.map((li,i)=>(
                      <Link className=" font-normal text-[16px] text-black text-left mb-8" key={i} href={li.link}>{li.name}</Link>
                    ))
                  }
                </div>
              </motion.nav>}
              </AnimatePresence>
          <div className=" flex-1 relative p-4">
          {!isNavOpen && <RxHamburgerMenu onClick={toggleNav}  size={18} className=" hover:cursor-pointer absolute top-2 left-2 text-black font-normal" />}
            {children}
          </div>
        </div>
    )
}

const navVariants:Variants = {
  hidden: {
    x: "-100vh"
  },
  visible: {
    x: "0",
    transition:{
      type: "spring",
      damping: 100,
      stiffness: 500,
    }
  },
  exit:{
    x:"-100vh",
  }
}