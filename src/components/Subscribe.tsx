export default function Subscribe() {
  return (
    <section className="w-full h-full flex flex-col justify-start items-center pt-3 pb-10 px-6 md:px-16">
      <div className="w-full h-full bg-[#5712441A] bg-opacity-10 text-[#151515] py-8 lg:py-12 px-2 lg:px-6 flex flex-col justify-start items-center rounded-md">
        <div className="w-full mx-auto px-4 lg:px-8 text-start">
          <h2 className="text-2xl font-semibold mb-2">
            Sign Up for Our Newsletter
          </h2>
          <p className="text-[#151515] mb-6">
            Subscribe to receive our latest company updates
          </p>
          <form className="flex flex-col md:flex-row items-start md:items-center justify-start w-full gap-5">
            <input
              type="email"
              placeholder="Enter your email."
              className="bg-inherit w-full px-4 py-3 border border-opacity-75 border-[#6C757D] text-gray-900 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#571244] text-white px-6 py-3 rounded-md hover:bg-[#4A0F40] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
