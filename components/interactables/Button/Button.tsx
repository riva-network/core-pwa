import clsx from "clsx"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode,
  className?: string,
  type: "button" | "submit" | "reset" | undefined
}

export const Button = ({ className, children, type }: ButtonProps) => {
  return (
    <button
      className={clsx("shadow-primary flex items-center justify-center bg-cover bg-no-repeat bg-center relative text-white transition-all duration-200 ease-linear py-2 rounded-lg hover:scale-[1.01] hover:after:left-1 hover:after:top-1 after:content-[''] after:w-full after:rounded-lg after:bg-gradient-to-t after:from-[#0C4660] after:to-[#172880] after:absolute after:left-2 after:top-2 after:transition-all after:delay-75 after:h-full after:-z-10 after:[transform:translateZ(-50px)]", className)}
      style={{
        backgroundImage: `url('/btn-pattern.svg'), linear-gradient(180deg, #28b5f4 0%, #3758ff 100%)`,
        transformStyle: 'preserve-3d'
      }}
      type={type}
    >
      {children}
    </button>
  )
}