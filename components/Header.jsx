import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <div className="sticky top-0 shadow-sm border-b bg-white z-10">
      <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1641425447/coffmanjrp.io/2880px_Instagram_logo_73fba851e4.png"
            alt="Next Instagram"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1641430063/coffmanjrp.io/insta_logo_d1a0094f69.png"
            alt="Next Instagram"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
            />
          </div>
        </div>
        <div className="flex justify-end items-center space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn" />
            <div className="absolute -top-2 -right-1 text-xs w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center animate-pulse">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://res.cloudinary.com/coffmanjrp-dev/image/upload/v1635197000/coffmanjrp.io/paul_coffman_jr_e56ec322cd.png"
            alt="profile"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;