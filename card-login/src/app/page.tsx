import Image from "next/image";

export default function SignIn() {
  return (
    <main className="min-h-screen flex bg-gray-50">
      
      <section className="hidden md:flex md:w-1/2 relative">
        <Image
          src="/machine.jpg" 
          alt="Trading Illustration"
          fill
          className="object-cover"
          priority
        />
      </section>

      <section className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <article className="w-full max-w-md">
          <header className="flex justify-end text-sm text-gray-500 mb-8">
            <p>Don't have an account?</p>
            <a href="#" className="ml-1 text-blue-600 hover:underline">
              Sign up
            </a>
          </header>

          <h1 className="text-3xl md:text-3xl text-gray-800 font-bold mb-8">Sign in</h1>

         
          <nav className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex-1 border border-gray-300 rounded-lg py-3 px-4 text-gray-700 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Image
                src="/google.png"
                alt="Google"
                width={20}
                height={20}
                className="mr-3"
              />
              Google
            </button>

            <button className="flex-1 border border-gray-300 rounded-lg py-3 px-4 text-gray-700 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Image
                src="/apple.png"
                alt="Apple"
                width={20}
                height={20}
                className="mr-3"
              />
              Apple ID
            </button>
          </nav>
          
          <div className="flex-grow border-t border-gray-300"></div>

          <div className="relative flex my-8">
            <span className="flex-shrink mx-4 align-super  text-gray-600 text-sm">Or continue with email address</span>
          </div>
          
          <form className="space-y-6">
            <label className="block relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Image
                  src="/email.png"
                  alt="Email Icon"
                  width={18}
                  height={18}
                />
              </span>
              <input
                type="email"
                placeholder="admin@gmail.com"
                defaultValue="admin@gmail.com"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              />
            </label>

            <label className="block relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Image
                  src="/password.png"
                  alt="Password Icon"
                  width={18}
                  height={18}
                />
              </span>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 transition-colors"
            >
              Start trading
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}