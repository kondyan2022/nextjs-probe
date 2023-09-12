const { default: GalleryCard } = require("../GalleryCard/GalleryCard");

const SimpleGallery = () => {
  return (
    <ul className="flex flex-col gap-y-[24px] justify-center">
      {[1, 2, 3].map((elem) => (
        <li key={elem} className="mx-auto">
          <GalleryCard
            src={`/img/gallery-${elem}.jpg`}
            alt="photo"
            imageSize={{ width: 360, height: 230 }}
          />
        </li>
      ))}
    </ul>
  );
};

export default SimpleGallery;
