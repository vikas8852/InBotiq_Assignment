import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#cbe6f7] via-[#e7f3fa] to-white

">
      <main className="flex flex-col items-center justify-center px-8 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[rgb(235,49,201)] to-[rgb(236,72,153)] bg-clip-text text-transparent mb-4">
           RoleHub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
         Designed to feel fast, secure, and effortless — a full-stack role-based system where the frontend and backend work perfectly together.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/login"
            className="px-8 py-3 bg-[rgb(235,49,201)] text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-8 py-3 bg-white text-[rgb(242,96,196)] font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-[rgb(255,87,51) transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer]"
          >
            Sign Up
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="flex items-center justify-center p-6">
  <div className="w-60 h-60 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl border-4 border-orange-500 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      Fast & Secure
    </h3>
    <p className="text-gray-600 dark:text-gray-300 ">
      Built with modern encryption and strong practices to keep your data safe.
    </p>
  </div>
</div>

         <div className="flex items-center justify-center p-6">
  <div className="w-60 h-60 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl border-4 border-indigo-500 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      Easy to Use
    </h3>
    <p className="text-gray-600 dark:text-gray-300 ">
      Smart design. Smooth experience. Works for everyone.
    </p>
  </div>
</div>

        <div className="flex items-center justify-center p-6">
  <div className="w-60 h-60 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl border-4 border-pink-500 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      24/7 Support
    </h3>
    <p className="text-gray-600 dark:text-gray-300 ">
      Always here to help you succeed.
    </p>
  </div>
</div>
<div className="flex items-center justify-center p-6">
  <div className="w-60 h-60 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl border-4 border-yellow-500 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      Role-Based Access
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      Custom dashboards and secure routes built for both Users and Admins.
    </p>
  </div>
</div>
<div className="flex items-center justify-center p-6">
  <div className="w-60 h-60 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl border-4 border-green-500 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      Scalable Architecture
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      Designed with a flexible structure that grows with your application.
    </p>
  </div>
</div>
<div className="flex items-center justify-center p-6">
  <div className="w-60 h-60 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl border-4 border-cyan-500 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      Modern UI
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      Built with Next.js and Tailwind CSS for a clean, responsive experience.
    </p>
  </div>
</div>



        </div>







      </main>
    </div>
  );
}
