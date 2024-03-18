import { useState } from "react";
import Link from "./Link/Link";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
const [open, setOpen]=useState(false)

    const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/services', name: 'Services' },
  { id: 4, path: '/contact', name: 'Contact' },
  { id: 5, path: '/products', name: 'Products' },
];

    return (
        <nav>
            <div className="lg:hidden text-2xl p-6 px-6" onClick={() => setOpen(!open)}>
                {
                    open===true? <IoIosCloseCircle  />: <IoMenu  />
                }
               
            </div>
            <ul className={`lg:flex m-6 gap-4 lg:static duration-1000  absolute p-4  ${open? 'top-12': '-top-60'} bg-[purple] text-white  shadow-lg` }>
                 {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
           </ul>
        </nav>
    );
};

export default Navbar;