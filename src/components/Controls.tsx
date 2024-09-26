import { FaFastBackward, FaFastForward } from "react-icons/fa";
import { useVisibleStore } from "../store/useVisible";

const Controls = () => {
  const componentIds = [
    "#intro",
    "#assets",
    "#about",
    "#utility",
    "#leaderboard",
  ];

  const { setVisibleComponent, visibleComponent } = useVisibleStore();

  return (
    <div className="flex items-center justify-between px-5 lg:px-10 z-10 py-4">
      <button
        className="border border-accent size-20 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-colors backdrop-blur-sm"
        onClick={() => {
          if (componentIds.indexOf(visibleComponent) === 0) return;
          setVisibleComponent(
            componentIds[componentIds.indexOf(visibleComponent) - 1],
          );
        }}
      >
        <FaFastBackward />
      </button>
      <button className="text-sm border border-accent h-20 w-40 rounded-full flex items-center justify-center text-accent uppercase backdrop-blur-sm z-20 hover:bg-accent hover:text-black transition-colors font-semibold">
        Claim Free NFT
      </button>
      <button
        className="border border-accent size-20 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-colors backdrop-blur-sm"
        onClick={() => {
          if (
            componentIds.indexOf(visibleComponent) ===
            componentIds.length - 1
          )
            return;
          setVisibleComponent(
            componentIds[componentIds.indexOf(visibleComponent) + 1],
          );
        }}
      >
        <FaFastForward />
      </button>
    </div>
  );
};

export default Controls;
