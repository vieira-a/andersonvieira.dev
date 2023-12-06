import { skills } from "@/data/skills";

export default function SkillsCard() {
  
  return (
    <div className='grid grid-cols-3 gap-1'>
      {skills && skills.map((item) => (
        <p className='p-4 bg-gray-dark text-center' key={item.id}>{item.description}</p>
      ))}
    </div>
  ) 
}