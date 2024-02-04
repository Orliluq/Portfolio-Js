/* eslint-disable react/prop-types */
const Card = ({ titles, subtitles, images }) => {
  return (
    <div className="flex flex-col w-30 h-30 items-center justify-center border rounded-xl border-orange-100">
      <div className="h-full w-full group relative items-center justify-center overflow-hidden cursor-pointer ">
        <img
          className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:opacity-5"
          src={images}
          alt=""
        />
        
        <div className="absolute flex flex-col inset-0 text-black items-center justify-center gap-3 px-6 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500">
          <div className="flex gap-5">

          <h5 className="font-oswald font-bold text-1xl lg:text-2xl uppercase tracking-tighter">{titles}</h5>
          <p className="font-oswald font-bold text-sm uppercase tracking-tighter ">{subtitles}</p>
          <i className=" bi bi-github text-2xl "></i>
          <i className="bi bi-link-45deg text-2xl "></i>
        </div>
      </div>
    </div>
  </div>
     
  );
};

export { Card };
