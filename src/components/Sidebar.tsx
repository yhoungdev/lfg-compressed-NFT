import { Link, useRouter } from "@tanstack/react-router";
import { DASHBOARDNAV } from "../constant/route";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="px-5 h-screen py-10 bg-sidebar ">
      <div className="flex flex-col gap-y-7 cursor-wait">
        {DASHBOARDNAV.map((link) => (
          <Link
            to={`${!link.isDisabled ? link.path : ""}`}
            key={link.path}
            className={`uppercase flex items-center 
             gap-x-2 text-center rounded-full
              py-3 px-4 border font-thin hover:bg-white/10 transition-colors backdrop-blur-lg ${
                router.latestLocation.pathname === link.path
                  ? "default_button chillax-font"
                  : "border-gray-50/20"
              }
            
            ${link?.isDisabled && "cursor-not-allowed"}`}
          >
            {link.icon}
            <div className="flex items-center justify-between gap-4 w-full">
              {link.name}

              {link.isDisabled && (
                <span>
                  <small
                    className={`text-[8px] ${link?.isDisabled && "text-accent"}`}
                  >
                    Coming Soon
                  </small>
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
