import { Fragment } from "react";
import GalleryImage from "./shared/galleyImage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Gallery = () => {
  const { data } = useQuery({
    queryKey: ["nfts"],
    queryFn: async () => {
      const response = await axios.get("/json/nft.json");
      return response?.data;
    },
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="grad-text text-grad font-semibold text-2xl">NFTs </h1>{" "}
      </div>

      <div className="flex">
        <div className="flex gap-3 my-5 flex-wrap">
          <center>NFTS would appear here in a while 😄😄😄</center>
        </div>
      </div>
    </>
  );
};

export default Gallery;
