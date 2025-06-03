import drawing from "../images/drawing.png";

function Community() {
  return (
    <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 place-items-center py-12 mt-12 mb-0 px-6 md:px-20 gap-10">
      {/* left section */}
      <div className="text-center md:text-left max-w-md md:max-w-none">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-normal">
          Join Our <br /> Ever Growing <br /> Community
        </h1>

        <form
          action=""
          className="mt-6 flex border border-white bg-black text-white rounded-md w-full max-w-md gap-1 mx-auto md:mx-0"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow bg-transparent text-white placeholder-white outline-none px-3 py-2 rounded-l-md text-xs sm:text-sm font-medium"
            aria-label="Email Address"
          />
          <button
            type="submit"
            className="bg-white text-[#08B6D8] px-4 sm:px-6 py-2 text-xs sm:text-sm rounded-md m-1"
          >
            Join Now
          </button>
        </form>
      </div>

      {/* right section */}
      <div className="max-w-xs sm:max-w-sm md:max-w-md">
        <img
          src={drawing}
          alt="Community Drawing"
          className="w-full h-auto pr-0 md:pr-12"
        />
      </div>
    </div>
  );
}

export default Community;
