import React from 'react';
import Header from '../../Company/Header/Header';
import Footer from '../../Company/Footer/Footer';

const Login = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen w-full px-2 sm:px-6 lg:px-12">
        <div className="grid gap-4 sm:gap-6 max-w-lg">
          <section id="back-div" className="bg-gradient-to-r from-blue-900 to-green-900 rounded-xl sm:rounded-3xl p-4 sm:p-8">
            <div className="border-4 sm:border-8 border-transparent rounded-lg bg-white dark:bg-gray-900 shadow-md sm:shadow-xl p-4 sm:p-8 m-1 sm:m-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900">Log in</h1>
              <form action="#" method="post" className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-base sm:text-lg dark:text-gray-300">Email</label>
                  <input
                    id="email"
                    className="border p-2 sm:p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-base sm:text-lg dark:text-gray-300">Password</label>
                  <input
                    id="password"
                    className="border p-2 sm:p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <a href="#" className="text-blue-400 text-sm transition hover:underline">Forget your password?</a>
                <button
                  className="w-full p-2 sm:p-3 mt-2 sm:mt-4 text-white bg-gradient-to-r from-blue-500 to-blue-900 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  LOG IN
                </button>
              </form>
              <div className="flex flex-col mt-4 text-xs sm:text-sm text-center dark:text-gray-300">
                <p>Don't have an account? <a href="#" className="text-blue-400 transition hover:underline">Sign Up</a></p>
              </div>
              <div id="third-party-auth" className="flex justify-center gap-2 sm:gap-4 mt-3 sm:mt-5">
                {/* Add third-party auth buttons here */}
              </div>
              <div className="mt-4 text-center text-xs sm:text-sm text-gray-500">
                <p>
                  By signing in, you agree to our{' '}
                  <a href="#" className="text-blue-400 transition hover:underline">
                    Terms
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-400 transition hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
