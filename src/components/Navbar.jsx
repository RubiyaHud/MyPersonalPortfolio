// import Image from '../Image';
import logoImg from "../assets/logo.png";
import Image from "./Image";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-bgC">
                {/* Navbar Start: Logo */}
                <div className="navbar-start lg:pl-[50px]">
                    <Image imgSrc={logoImg} imgAlt={logoImg} />
                </div>

                {/* Navbar Center (optional, can be used if needed) */}
                {/* <div className="navbar-center hidden lg:flex"> ... </div> */}

                {/* Navbar End: Links (Desktop) & Menu Icon (Mobile) */}
                <div className="navbar-end w-full justify-end lg:pt-5 lg:pr-[50px]">

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex menu menu-horizontal px-1 font-poppins text-FontC text-[18px] font-normal leading-7">
                        <li><a> About </a></li>
                        <li><a> Resume </a></li>
                        <li><a> Portfolio </a></li>
                        <li><a> Skills </a></li>
                        <li><a> Services </a></li>
                        <li><a> Blog </a></li>
                        <li><a> Contact </a></li>
                    </ul>

                    {/* Mobile Menu Dropdown */}
                    <div className=" dropdown lg:hidden ">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-base-100 shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <div className="">
                            <ul tabIndex={0}
                                className="dropdown-content right-10 bg-base-100 rounded-box z-10 mt-0 w-72 p-5 shadow font-inter text-bgC text-[20px] font-medium leading-9"
                            >
                                <li><a>About</a></li>
                                <li><a>Resume</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>Skills</a></li>
                                <li><a>Services</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar