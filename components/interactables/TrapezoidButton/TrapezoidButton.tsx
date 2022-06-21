import { ReactNode } from "react"

type TrapezoidButtonProps = {
  children: ReactNode,
}

export const TrapezoidButton = ({ children }: TrapezoidButtonProps) => {
  return <a className="w-[220px] h-[50px] flex items-center justify-center bg-gradient-to-tr from-[#3758FF] to-[#28b5f4]/[0.2] text-white cursor-pointer" style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 8% 100%)' }}>
    {children}
  </a>
}