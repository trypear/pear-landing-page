import Link from "next/link";
import MobileMenu from "./mobile-menu";
import AuthButton from "./authbutton";
import PearLightLogo from "./PearLight70x70.svg";

export default function Header() {
  return (
    <header className="animate-fadein-opacity fixed top-0 z-30 w-full bg-white-50 md:bg-transparent md:backdrop-blur-sm">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6">
        <div className="roboto-medium flex h-20 items-center justify-between text-2xl text-black transition ease-in-out hover:text-gray-600 md:text-xl">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <div className="flex flex-row space-x-3">
                <div className="flex flex-row">
                  <Link href={"/"}>
                    <svg
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 5.0337C7.00423 5.0337 7.00847 5.03369 7.01272 5.03369V5.0337C10.4094 5.03579 10.4457 5.17926 11.1134 7.82375L11.1134 7.82377C11.2686 8.43857 11.458 9.18856 11.7316 10.1034C12.5599 12.8723 12.7172 13.2765 12.8981 13.7417L12.8981 13.7417C13.0361 14.0964 13.1879 14.4866 13.6617 15.9884C14.7298 19.3737 13.4658 23.784 7.01272 23.999V23.9999C7.00848 23.9997 7.00424 23.9996 7 23.9994C6.99576 23.9996 6.99152 23.9997 6.98728 23.9999V23.999C0.534171 23.784 -0.729823 19.3737 0.338255 15.9884C0.812063 14.4866 0.96386 14.0964 1.10188 13.7417C1.28283 13.2765 1.4401 12.8723 2.26839 10.1034C2.54205 9.18855 2.73141 8.43856 2.88664 7.82375L2.88665 7.82375C3.55435 5.17926 3.59057 5.03579 6.98728 5.0337V5.03369C6.99153 5.03369 6.99577 5.0337 7 5.0337Z"
                        fill="black"
                      />
                      <circle
                        cx="23.8391"
                        cy="22.2874"
                        r="1.7122"
                        fill="#FFFEFE"
                      />
                      <g filter="url(#filter0_d_757_1022)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.76512 4.54863L8.7436 4.56796C8.7429 4.56117 8.74206 4.55284 8.74115 4.54304C8.73549 4.54169 8.73049 4.54048 8.72618 4.53941L8.73971 4.52713C8.71027 4.19043 8.62726 2.57318 9.61139 1.47009C10.693 0.257741 13.0997 0.514699 13.1943 0.525314L13.1987 0.525432C13.1987 0.525432 13.1681 3.09028 11.8328 4.05459C10.6403 4.91577 9.08431 4.62144 8.76512 4.54863Z"
                          fill="black"
                        />
                      </g>
                      <path
                        d="M12.1637 17.3877C12.1637 19.1766 9.75391 20.4879 9.75391 20.4879C9.75391 20.4879 11.131 19.1766 11.131 17.3877C11.131 15.5988 9.89161 14.889 10.7867 14.5651C11.6818 14.2412 12.1637 15.5988 12.1637 17.3877Z"
                        fill="#FFFAFA"
                      />
                      <defs>
                        <filter
                          id="filter0_d_757_1022"
                          x="7.67095"
                          y="0.495605"
                          width="6.58095"
                          height="6.26796"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="1.05366" />
                          <feGaussianBlur stdDeviation="0.52683" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_757_1022"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_757_1022"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </Link>
                  <Link href={"/about"}>About</Link>
                </div>
                <Link href={"https://discord.gg/AKy5FmqCkF"}>Discord</Link>
                <Link href={"https://github.com/trypear/pearai-app"}>
                  Github
                </Link>
              </div>
            </ul>
          </div>
          {/* Desktop navigation */}
          {process.env.NODE_ENV !== "production" && <AuthButton />}{" "}
          {/* AuthButton is hidden in production */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
