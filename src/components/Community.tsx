import drawing from "../images/drawing.png";
function Community() {
  return (
    <div className="bg-black text-white grid grid-cols-2 place-items-center py-12 mt-12 mb-0">
      {/* left section */}
      <div>
        <h1 className="text-5xl font-bold leading-normal ">
          Join Our <br /> Ever Growing <br /> Community
        </h1>

        <form
          action=""
          className="flex border border-white bg-black text-white rounded-md w-full max-w-md gap-1"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow bg-transparent text-white placeholder-white outline-none px-3 py-2 rounded-l-md text-sm font-medium"
            aria-label="Email Address"
          />
          <button
            type="submit"
            className="bg-white text-[#08B6D8] px-6 py-2 text-sm rounded-md m-1 "
          >
            Join Now
          </button>
        </form>
      </div>

      {/* right section */}
      <div>
        <img src={drawing} alt="" className="pr-12" />
      </div>
    </div>
  );
}

export default Community;
