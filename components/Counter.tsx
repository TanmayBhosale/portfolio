"use client"

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({ className="",from, to, decimal=0, duration=1, symbol="" }:{from:number,to:number,decimal?:number, duration?:number,className?:string, symbol?:string}) {
    const nodeRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        if(!node) return 
        const controls = animate(from, to, {
            duration: duration,
            onUpdate(value) {
            node.textContent = value.toFixed(decimal)+symbol;
            },
        });
    
        return () => controls.stop();
        }, [from, to]);
  
    return <p className={className} ref={nodeRef} />;
  }