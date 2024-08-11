const QualityCard = ({ number, title, description }) => {
  return (
    <div className="mb-3 mt-4 max-w-sm transform cursor-pointer border-b border-pink pt-10 text-center lg:mt-10">
      <button
        className="mx-auto mb-2 flex flex-shrink-0 items-center rounded-full border-4 border-none bg-black px-6 py-2.5 text-center text-white transition duration-300 ease-in-out"
        type="button"
      >
        {number}
      </button>

      <div className="mb-2 mt-4 flex justify-center text-center text-xl font-semibold tracking-wide text-black">
        {title}
      </div>

      <div>
        <p className="mb-4 px-3 text-center text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default QualityCard;
