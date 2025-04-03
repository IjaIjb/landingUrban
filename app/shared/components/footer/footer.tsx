import Image from "next/image";
import React from "react";
import "./footer.scss";
import Link from "next/link";

export default function Footer() {
  const today = new Date();

  const currentYear = today.getFullYear();
  return (
    <footer className="w-full bg-footerBg">
      <div className="pt-28">
        {/* ===== desktop footer ================ */}
        <div className="lg:w-[85%]  m-auto hidden lg:block">
          <div className="flex justify-between items-start text-white ">
            <div className="w-2/12 pr-2 footer-urban-area">
              <div className="bg-white py-2 rounded-full flex justify-center items-center w-32">
                <Image
                  src="/assets/footer-logo.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-20"
                />
              </div>
              <p className="mt-6 italic font-creato font-light text-[0.70rem] xl:text-sm mr-2">
                We are a traveler-centric brand with a focus on redefining
                Africa's approach to travel.
              </p>

              <div className="mt-4">
                <div className="flex gap-2 mb-4 urban-footer-icons">
                  <Image
                    src="/assets/MFooterEmailIcon.svg"
                    width={32}
                    height={28}
                    alt=""
                    className=""
                  />
                  <div className="text-white text-xs xl:text-sm pr-4 font-thin">
                    <p>Email</p>
                    <p>hello@urban.ng</p>
                  </div>
                </div>

                <div className="flex gap-2 urban-footer-icons">
                  <Image
                    src="/assets/footerCallIcon.svg"
                    width={32}
                    height={28}
                    alt=""
                    className=""
                  />
                  <div className="text-white text-xs xl:text-sm pr-4 font-thin">
                    <p>Call Us</p>
                    <p>+234 901 919 5291</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/12">
              <h2 className="font-creato">Growth & Partnership</h2>
              <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                <Link href="/fleet">
                  <li>Fleets</li>
                </Link>

                <Link href="/park">
                  <li>Parks</li>
                </Link>

                <Link href="/agency">
                  <li>Agencies</li>
                </Link>

                <Link href="/travelers-club">
                  <li>Traveler's Club</li>
                </Link>

                <Link href="/travelers-kit">
                  <li>Traveler’s Kits</li>
                </Link>

                <Link href="/hotels">
                  <li>Hotels</li>
                </Link>

                <Link href="/urban-card">
                  <li>Urban card</li>
                </Link>
              </ul>
            </div>
            <div className="w-2/12">
              <h2 className="font-creato">About Us</h2>
              <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                <li>Why Urban</li>
                <li>Urban Experience</li>
                <li>Our Vision</li>
                <li>Core Values</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="w-2/12">
              <h2 className="font-creato">Location</h2>
              <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                <li>Abuja</li>
                <li>Jos</li>
                <li>Makurdi</li>
                <li>Minna</li>
                <li>
                  <Link href="/cities">View more</Link>
                </li>
              </ul>
            </div>
            <div className="w-2/12">
              <h2 className="font-creato">Policies</h2>
              <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                <Link href="/policy/terms-of-use">
                  <li>Terms of Use</li>
                </Link>

                <Link href="/policy/refund-policy">
                  <li>Refund Policy</li>
                </Link>

                <Link href="/policy/behavioral-policy">
                  <li>Behavior Policy</li>
                </Link>

                <Link href="/policy/trip-cancellation-policy">
                  <li>Trip Cancellation Policy</li>
                </Link>

                <Link href="/policy/charter-policy">
                  <li>Charter Terms</li>
                </Link>

                <Link href="/policy/hotel-terms-conditions">
                  <li>Hotels T&C</li>
                </Link>

                <Link href="/policy/cards-terms-conditions">
                  <li>Cards T&C</li>
                </Link>
              </ul>
            </div>
            <div className="w-3/12 pl-4 pr-4">
              <h2 className="font-creato font-thin italic">Reach out to us</h2>
              <div className="mt-4">
                <form>
                  <input className="text-gray-600 bg-white rounded-full w-full 2xl:w-10/12 footer-input" />
                  <button className="py-3 px-4 rounded-full bg-green-700 text-white mt-2 font-creato text-xs">
                    Send Now
                  </button>
                </form>
                <div className="mt-6 flex items-center gap-2">
                  <div>
                    <Link href="">
                      <Image
                        src="/assets/linkedicon.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="https://x.com/hi_urbannative?s=21&t=GILaAZx6HwscHlqHOkmGSQ"
                      target="_blank"
                    >
                      <Image
                        src="/assets/twittericon.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61565504132192&mibextid=kFxxJD
"
                      target="_blank"
                    >
                      <Image
                        src="/assets/fbicon.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.instagram.com/hi_urbannative?igsh=NjlsbGlmanRvamVm
"
                      target="_blank"
                    >
                      <Image
                        src="/assets/igicon.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                    </Link>
                  </div>

                  <div>
                    <Image
                      src="/assets/youtubeicon.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Image
                    src="/assets/ncdpc.svg"
                    width={100}
                    height={40}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 text-center text-white mt-10 text-sm font-creato font-thin">
            © Urban {currentYear}. All Rights Reserved.
          </div>
        </div>

        {/* ======================================= */}

        {/* ================== mobile footer ===============*/}
        <div className="px-5 pb-1 -mt-10 lg:hidden">
          <div className="w-full m-auto">
            <h2 className="font-creato font-thin italic text-white">
              Reach out to us
            </h2>
            <div className="mt-0">
              <form className="flex items-center gap-2">
                <input className="text-gray-600 bg-white rounded-full w-8/12 ooter-input" />
                <button className="py-4 w-4/12 px-4 rounded-full bg-green-700 text-white mt-2 font-creato text-xs">
                  Send Now
                </button>
              </form>
              <div className="mt-3 flex px-2 items-center gap-4">
                <div>
                  <Image
                    src="/assets/linkedicon.svg"
                    width={26}
                    height={26}
                    alt=""
                  />
                </div>

                <div>
                  <Image
                    src="/assets/twittericon.svg"
                    width={26}
                    height={26}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src="/assets/fbicon.svg"
                    width={26}
                    height={26}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-4 flex justify-between gap-8 mt-6">
            <div className="w-1/2">
              <Image
                src="/assets/mobilefooterLogo.svg"
                width={100}
                height={28}
                alt=""
                className=""
              />
              <p className="mt-2 italic font-light text-gray-100 text-[0.7rem] w-11/12">
                Urban is an enabler of their inter-state travel needs and
                experience
              </p>
            </div>
            <div className="w-1/2">
              <div className="flex gap-2 mb-4">
                <Image
                  src="/assets/MFooterEmailIcon.svg"
                  width={32}
                  height={28}
                  alt=""
                  className=""
                />
                <div className="text-white text-[0.6rem]">
                  <p>Email</p>
                  <p>contact@urban.com</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Image
                  src="/assets/MCallIcon.svg"
                  width={32}
                  height={28}
                  alt=""
                  className=""
                />
                <div className="text-white text-[0.6rem]">
                  <p>Call Us</p>
                  <p>(00) 112 365 489</p>
                </div>
              </div>
            </div>
          </div>

          {/* -----links---------- */}
          <div className="flex flex-col gap-y-10 text-white mt-4">
            <div className="flex justify-between w-full">
              <div className="w-1/2">
                <h2 className="font-creato">Growth & Partnership</h2>
                <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                  <li>Fleets</li>
                  <li>Parks</li>
                  <li>Agencies</li>
                  <li>Traveler's Club</li>
                  <li>Traveler’s Kits</li>
                  <li>Hotels</li>
                  <li>Urban card</li>
                </ul>
              </div>
              <div className="w-1/2">
                <h2 className="font-creato">About Us</h2>
                <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                  <li>Why Urban</li>
                  <li>Urban Experience</li>
                  <li>Our Vision</li>
                  <li>Core Values</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <div className="w-1/2">
                <h2 className="font-creato">Location</h2>
                <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                  <li>Abuja</li>
                  <li>Jos</li>
                  <li>Makurdi</li>
                  <li>Minna</li>
                  <li>View more</li>
                </ul>
              </div>
              <div className="w-1/2">
                <h2 className="font-creato">Policies</h2>
                <ul className="text-xs xl:text-sm font-thin flex flex-col gap-2 mt-2">
                  <li>Terms Of Use</li>
                  <li>Refund Policy</li>
                  <li>Behavior Policy</li>
                  <li>Trip Cancellation Policy</li>
                  <li>Charter Terms</li>
                  <li>Hotels T&C</li>
                  <li>Cards T&C</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-2 text-center text-white mt-10 text-sm font-creato font-thin">
            © Urban {currentYear}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
