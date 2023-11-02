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
  return (
    <div className=" px-12">
    <nav className="m-7 bg-slate-200 p-4 rounded-md">
      <h1 className="text-xl">Gallery</h1>
    </nav>
    <div className="grid grid-cols-5 gap-4 mx-7 ">
      {images.map((img, index) => (
        <div className={`border-2 border-gray-400 rounded p-5 ${index === 0 ? 'col-span-2 row-span-2' : ''}`}  key={index}>
          <img  src={img} alt="" className="max-w-full h-auto" />

        </div>
      ))}
      <img className="border-2 border-gray-400 rounded p-5 border-dotted" src='/src/assets/images/addImage.jpg' alt="" />
    </div>
    </div>
  );
};

export default App;
