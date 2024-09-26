import { DASHBOARDNAV } from "@/src/constant/route";
import { Link, useRouter } from "@tanstack/react-router";

const MobileNav = () => {
  const router = useRouter();
  return (
    <div className="px-5 py-5  ">
      <div className="flex  flex-col justify-center  gap-1 gap-y-7">
        {DASHBOARDNAV.map(
          (link) =>
            !link.isDisabled && (
              <Link
                to={link.path}
                key={link.path}
                className={`uppercase   gap-x-2 text-center rounded-full py-2 px-4  font-600  transition-colors backdrop-blur-lg `}
              >
                <div className="flex flex-col items-center gap-2">
                  <div>{link.icon}</div>
                  <h1
                    className={`text-[10px]  ${router.latestLocation.pathname === link.path && "grad-text font-semibold"}`}
                  >
                    {link.name}
                  </h1>
                </div>
              </Link>
            ),
        )}
      </div>
    </div>
  );
};

export default MobileNav;
