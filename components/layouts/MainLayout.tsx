import { MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { ReactElement } from "react";

import { HomeSVG, GamesSVG, MarketSVG, SupportSVG, UserPlusSVG, LogoutSVG } from "../icons";
import { TrapezoidButton } from "../interactables";

type MainLayoutProps = {
  children: ReactElement
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return <div>
    <div className="block w-full h-[330px] bg-[url('/main-banner.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full bg-black/[0.75]  overflow-hidden flex flex-col items-center justify-start relative">
        <div className="w-3/4 xl:w-[unset]" style={{
          filter: 'drop-shadow(0px 3px 53px #3758FF)'
        }}>
          <div className="xl:w-[468px] h-[50px] xl:h-[90px] text-[21px] bg-gradient-to-r from-[#28b5f4]/[0.2] to-[#3758ff]/[0.73] flex items-center justify-center font-bold tracking-wider text-white" style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 8% 100%)', letterSpacing: '3px' }}>
            RIVA NETWORK
          </div>
          <div className="block 2xl:hidden mb-auto mt-4">
            <button className="flex  outline-none items-center h-[40px] rounded-[5px] w-[40px] mx-auto bg-gradient-to-b from-[#28b5f4] to-[#3758ff] border-none p-2 transition-all delay-300 ease-out cursor-pointer">
              <MenuIcon className="w-25 h-25 fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-[-100px] 2xl:mt-[-126px] max-w-full  w-full 2xl:w-4/5  h-auto py-0 px-[10px] mx-auto">
      <nav>
        <ul className="flex items-center justify-center 2xl:justify-between">
          <li className="hidden 2xl:list-item filter filter-['0px 3px 6px #3758FF'] relative pb-[10px] mt-[40px]">
            <TrapezoidButton>
              <HomeSVG className="mr-[10px]" />
              Anasayfa
            </TrapezoidButton>
          </li>
          <li className="hidden 2xl:list-item filter filter-['0px 3px 6px #3758FF'] relative pb-[10px] mt-[40px]">
            <TrapezoidButton>
              <GamesSVG className="mr-[10px]" />
              Oyunlar
            </TrapezoidButton>
          </li>
          <li className="hidden 2xl:list-item filter filter-['0px 3px 6px #3758FF'] relative pb-[10px] mt-[40px]">
            <TrapezoidButton>
              <GamesSVG className="mr-[10px]" />
              Sıralama
            </TrapezoidButton>
          </li>
          <li>
            <div className="relative">
              <a className="flex items-center justify-center bg-[url('/logo-bg.png')] w-[200px] h-[200px] xl:w-[280px] xl:h-[312px] mt-[-40px] bg-contain bg-center bg-no-repeat transition-all delay-200"
                style={{
                  animation: 'rivaLogo 4s infinite alternate'
                }}
              >
                <Image width="100px" height="100px" src='/footer-logo.svg' alt="Riva network" className="max-w-[90px] xl:max-w-unset" />
              </a>
            </div>
          </li>
          <li className="hidden 2xl:list-item filter filter-['0px 3px 6px #3758FF'] relative pb-[10px] mt-[40px]">
            <TrapezoidButton>
              <MarketSVG className="mr-[10px]" />
              Market
            </TrapezoidButton>
          </li>
          <li className="hidden 2xl:list-item filter filter-['0px 3px 6px #3758FF'] relative pb-[10px] mt-[40px]">
            <TrapezoidButton>
              <SupportSVG className="mr-[10px]" />
              Desktek
            </TrapezoidButton>
          </li>
          <li className="hidden 2xl:list-item filter filter-['0px 3px 6px #3758FF'] relative pb-[10px] mt-[40px]">
            <TrapezoidButton>
              <UserPlusSVG className="mr-[10px]" />
              Market
              <LogoutSVG className="mr-[10px]" />
              Giriş
            </TrapezoidButton>
          </li>
        </ul>
      </nav>
    </div>
    {children}
  </div>
}

export default MainLayout;