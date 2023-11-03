import { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";


const App = () => {
  const [images, setImages] = useState([
    "/src/assets/images/image-1.webp",
    "/src/assets/images/image-2.webp",
    "/src/assets/images/image-3.webp",
    "/src/assets/images/image-4.webp",
    "/src/assets/images/image-5.webp",
    "/src/assets/images/image-6.webp",
    "/src/assets/images/image-7.webp",
    "/src/assets/images/image-8.webp",
    "/src/assets/images/image-9.webp",
    "/src/assets/images/image-10.jpeg",
    "/src/assets/images/image-11.jpeg",
  ]);

  // selected image state
  const [selected, setSelected] = useState([]);

  // This function is for checking image selection.
  const targetImage = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  // image delete operation implement here.
  const handleDelete = () => {
    const remainingImages = images.filter(
      (_, index) => !selected.includes(index)
    );
    setImages(remainingImages);
    setSelected([]);
  };

  // ---------------------------------------------
  // reordering functions manage here
  const handleImageReorder = (dragIndex, dropIndex) => {
    const reorderedImages = [...images];
    const [draggedImage] = reorderedImages.splice(dragIndex, 1);
    reorderedImages.splice(dropIndex, 0, draggedImage);
    setImages(reorderedImages);
  };

  return (
    <div className="px-2 md:px-10 mb-10">
      <div className="shadow-xl p-5">
        <nav className="m-2 md:m-7 bg-slate-200 p-4 rounded-md">
          {selected.length > 0 ? (
            <div className="flex justify-between">
              <h1 className="text-xl flex items-center gap-2">
                <ImCheckboxChecked /> {selected.length}{" "}
                {selected.length > 1 ? "files" : "file"} Selected
              </h1>
              <button
                className="text-red-700 hover:border-b-red-600 hover:border-b-2"
                onClick={handleDelete}
              >
                Delete {selected.length > 1 ? "files" : "file"}
              </button>
            </div>
          ) : (
            <h1 className="text-xl">Gallery</h1>
          )}
        </nav>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-2 md:mx-7">
          {images.map((img, index) => (
            <div
              className={`border-2 border-gray-400 rounded-lg p-5 relative group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }
              `}
              key={index}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text/plain", index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const dragIndex = e.dataTransfer.getData("text/plain");
                handleImageReorder(parseInt(dragIndex), index);
              }}
            >
              {/* conditionally handle when image is selected */}
              <img
                src={img}
                alt=""
                className={`max-w-full max-h-max  ${
                  selected.includes(index) ? "blur-[0.5px] " : ""
                }`}
              />
               
              <input
                type="checkbox"
                className=" hidden absolute top-2 left-2 cursor-pointer group-hover:block h-7 w-5 checked:block"
                checked={selected.includes(index)}
                onChange={() => targetImage(index)}
              />
            </div>
          ))}

          <img
            className="border-2 border-gray-400 rounded p-5 border-dotted"
            src="/src/assets/images/addImage.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default App;
