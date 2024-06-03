import React from 'react'


interface ShimmerButtonProps {
    title: string
    icon?: React.ReactNode
    position?: string
    handleClick?: () => void
    otherClasses?: string
}
const ShimmerButton = ({ 
    title,
    icon,
    position,
    handleClick,
    otherClasses,
 }: ShimmerButtonProps ) => {

  return (
    <button 
      className={`w-full relative md:w-60 gap-2 py-2 min-h-12 md:mt-10 inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
      onClick={handleClick}
    >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
    </button>
  )
}

export default ShimmerButton