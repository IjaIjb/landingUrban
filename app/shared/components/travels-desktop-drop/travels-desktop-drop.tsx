import useReferralStore from "@/providers/referral..providers";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, MouseEvent } from "react";

type TravelsDesktopDropProps = {
  settravelersPage: (page: string) => void;
  setisTravelsDropOpen: (isOpen: boolean) => void;
  isTravelsDropOpen: boolean;
};

export default function TravelsDesktopDrop({
  setisTravelsDropOpen,
  settravelersPage,
  isTravelsDropOpen,
}: TravelsDesktopDropProps) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const { setReferralModal } = useReferralStore();

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setisTravelsDropOpen(false);
    }
  };

  useEffect(() => {
    if (!isTravelsDropOpen) return;

    const handleClick = (event: globalThis.MouseEvent) => {
      handleOutsideClick(event as unknown as MouseEvent);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isTravelsDropOpen]);

  const handleItemClick = (page: string, path: string) => {
    settravelersPage(page);
    setisTravelsDropOpen(false);
    router.push(path);
  };

  const handleReferralClick = () => {
    setReferralModal(true);
    setisTravelsDropOpen(false);
  };

  if (!isTravelsDropOpen) return null;

  const menuItems = [
    {
      icon: "./assets/parkIcon.svg",
      title: "Park",
      description: "Join our network of park partners.",
      page: "Urban Card",
      path: "/park",
    },
    {
      icon: "./assets/fleetIcon.svg",
      title: "Fleet",
      description: "Join our growing community of fleet partners.",
      page: "fleet",
      path: "/fleet",
    },
    {
      icon: "./assets/providersIcon.svg",
      title: "Provider's agency",
      description:
        "Take the Urban wheel and experience a level of driving purity.",
      page: "Urban Card",
      path: "/agency",
    },
    {
      icon: "./assets/travelersIcon.svg",
      title: "Traveler's Club",
      description: "Where to next? Go with Urban.",
      page: "Urban Card",
      path: "/travelers-club",
    },
    {
      icon: "./assets/travelerskit.svg",
      title: "Traveler's Kit",
      description: "Brilliant travel accessories for every traveler.",
      page: "Urban Card",
      path: "/travelers-kit",
    },
  ];

  const firstColumnItems = menuItems.slice(0, 3);
  const secondColumnItems = menuItems.slice(3);

  return (
    <div
      className="travelersItems-container-t hidden md:block py-4"
      ref={modalRef}
    >
      <div className="mb-4">
        <hr />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 over">
        <div className="lg:w-1/2 flex flex-col gap-4 w-full">
          {firstColumnItems.map((item, index) => (
            <div
              key={index}
              className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2 cursor-pointer"
              onClick={() => handleItemClick(item.page, item.path)}
            >
              <img src={item.icon} alt={item.title} />
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {secondColumnItems.map((item, index) => (
            <div
              key={index}
              className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2 cursor-pointer"
              onClick={() => handleItemClick(item.page, item.path)}
            >
              <img src={item.icon} alt={item.title} />
              <div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}

          {/* Referral Campaign Button */}
          <div
            className="item font-creato font-light flex flex-row gap-2 items-start hover:bg-slate-100 p-2 cursor-pointer"
            onClick={handleReferralClick}
          >
            <Link className=" text-primary" />
            <div>
              <h4 className="font-bold">Referral Program</h4>
              <p className="text-sm">Earn rewards by inviting friends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
