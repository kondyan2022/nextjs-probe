import { Link } from "react-scroll";
import menuItems from "@/public/data/menuitem.json";

export default function HeaderMenu() {
  return (
    <nav className="hidden md:inline-block mt-[39px] xl:mt-[34px] mr-[31px] md:mr-0 ">
      <ul className="flex gap-x-[24px] text-sm">
        {menuItems.map(
          ({ index, name, active }) =>
            active && (
              <li key={index}>
                <Link
                  href="/"
                  to={name}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="text-[14px] tracking-[1.4px] text-white hover:cursor-pointer hover-effect capitalize"
                >
                  {name}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
}
