const CaptureEmailForm = ({ctaText}) => {
    return (
      <form className=" md:w-2/3 mx-auto grid md:flex gap-2 md:gap-4 ">
       
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="md:w-2/3 px-4 py-3 border border-dark/70 bg-light rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-primary md:w-1/3 px-4 py-2 rounded-md text-light font-bold"
        >
          {ctaText}
        </button>
      </form>
    );
  };
  
  export default CaptureEmailForm;
  