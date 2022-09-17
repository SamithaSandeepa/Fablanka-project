const ContactUs = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h1>Details</h1>
        </div>
        <div className="col-md-6">
          <div className="contact-form">
            <div className="my-10 ">
              <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
              <form className="flex flex-col w-full space-y-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-semibold text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    className="px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-semibold text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    className="px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-semibold text-gray-500">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-semibold text-gray-500">
                    Message
                  </label>
                  <textarea className="px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
