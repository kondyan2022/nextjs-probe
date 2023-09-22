import GalleryCard from "../GalleryCard/GalleryCard";
import galleryData from "@/public/data/gallery.json";

const SimpleGallery = () => {
  return (
    <ul className="flex flex-col gap-y-[24px] justify-center">
      {galleryData.slice(0, 3).map((elem) => (
        <li key={elem} className="mx-auto">
          <GalleryCard
            src={`/img/${elem.uri}`}
            alt={elem.alt}
            imageSize={{ width: 360, height: 230 }}
          />
        </li>
      ))}
    </ul>
  );
};

export default SimpleGallery;
