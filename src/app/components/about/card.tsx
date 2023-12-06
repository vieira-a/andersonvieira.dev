'use client'

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CardButton from "@/app/ui/card-button";
import { useState } from "react";

interface AboutCardProps {
  children?: React.ReactNode;
  title: string;
  content?: string;
}

export default function AboutCard({ children, title, content }: AboutCardProps) {
  const [ showCardContent, setShowCardContent ] = useState<boolean>(false);

  const handleCardContent = () => {
    setShowCardContent(!showCardContent)
  }
  
  return (
    <div className='py-4 px-6 bg-gray-dark rounded-xl'>
      <div className='flex justify-between gap-2'>
        <h3>{title}</h3>
        <CardButton onClick={handleCardContent}>
          <ChevronDownIcon width={24}/>
        </CardButton>
      </div>
      <div className={`${!showCardContent ? 'hidden' : 'visible'}`} onClick={handleCardContent}>
        <p className='mt-6'>{content}</p>
      </div>
    </div>
  ) 
}