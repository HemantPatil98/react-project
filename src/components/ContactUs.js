const ContactUs = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl">Contact Us ☎️</h1>
      <div className="flex flex-col p-5">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-2xs p-2 mb-5 border border-gray-300 rounded-md text-sm leading-6"
        />
        <input
          name="email"
          type="email"
          placeholder="Email ID "
          className="w-2xs p-2 mb-5 border border-gray-300 rounded-md text-sm leading-6"
        />
        <button className="p-2 text-white bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-md cursor-pointer font-bold">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
