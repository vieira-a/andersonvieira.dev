import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CardButton from "@/app/ui/card-button";

interface AboutCardProps {
  children?: React.ReactNode;
  title: string;
  content?: string;
}

export default function AboutCard({ children, title, content }: AboutCardProps) {
  return (
    <div className='py-4 px-6 flex justify-between gap-2 bg-gray-dark rounded-xl'>
      <p>{title}</p>
      <CardButton>
        <ChevronDownIcon width={20}/>
      </CardButton>
    </div>
  ) 
}