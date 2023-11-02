import { useState } from "react";

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

  const [selected, setSelected] = useState([]);
  console.log(selected.length);
  const targetImage = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <div className="px-10 mb-10">
      <div className="shadow-xl p-5">
        <nav className="m-7 bg-slate-200 p-4 rounded-md">
          {selected.length>0 ? (
            <h1>{selected.length}</h1>
          ):(
            <h1 className="text-xl">Gallery</h1>
          ) }
        </nav>
        <div className="grid grid-cols-5 gap-4 mx-7 ">
          {images.map((img, index) => (
            <div
              className={`border-2 border-gray-400 rounded p-5 relative group hover:block hover:cursor-pointer  ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              key={index}
            >
              <img src={img} alt="" className="max-w-full max-h-max" />
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
