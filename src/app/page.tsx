import Image from "next/image";
import Face from "../image/4lCu2zih0ca.svg"




export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      {/* Container for both left and right sides */}
      <div className="flex w-full justify-center items-center mb-8">
        {/* Left side */}
        <div className="w-1/2 px-20 mb-16">
          <Image alt="Facebook" src={Face} width={300} height={100} />
          <h1 className="text-3xl font-medium ml-7 -mt-3">
            Facebook helps you connect and share with the people in your life.
          </h1>
        </div>

        {/* Right Side */}
       
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/4 shadow-lg">

        <input
         className="focus:outline-1 outline-blue-600 my-2 border border-1 border-gray-100 px-3 rounded-md py-2"
         type="text"
         placeholder="Email address or phone number"
        />
 
        <input
         className="focus:outline-1 outline-blue-600 my-2 border border-1 border-gray-100 px-3 rounded-md py-2"
         type="text"
         placeholder="Password"
        />
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">
         Login
        </button>
        <p className="cursor-pointer my-2 text-blue-600 text-sm text-center hover:underline">
         Forgotten Password?
        </p>
        <span className="my-2">
         <hr />
        </span>

        <button className="bg-green-500 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit px-2 mx-auto">
         Create new account
        </button>
      </div>

      </div>

      {/* Next Row for the "Create a Page" line */}

      <div className="mt-2 w-full flex justify-evenly">
        <h1></h1>
        <h1></h1>
        <h1 className="text-sm pl-72 ">
        <b className="cursor-pointer hover:underline underline-1">Create a Page </b> for a celebrity, brand, or business. 
        </h1>
      </div>
    </div>
  );
}
