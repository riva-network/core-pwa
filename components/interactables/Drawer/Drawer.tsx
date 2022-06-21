import { ReactNode } from "react"

type DrawerProps = {
  children: ReactNode,
  isOpen: boolean,
  setIsOpen: (arg1: boolean) => void
}

export const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-[280px] max-w-lg left-0 absolute bg-metal h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        {children}
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );

}