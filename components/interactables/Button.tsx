import clsx from "clsx"
import { ReactElement } from "react"

type ButtonProps = {
  children: ReactElement,
  className?: string
}

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <button
      className={clsx("w-full", className)}
      style={{
        boxShadow: '0px 4px 33px rgb(55 88 255 / 67%)'
      }}>
      {children}
    </button>
  )
}