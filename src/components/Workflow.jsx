import React from 'react'
import code from "../assets/code.jpg";
import { FiCheckCircle } from "react-icons/fi";

const Workflow = () => {
  return (
    <div>
      
        {/* heading========================================================= */}
        <div className=' flex items-center justify-center'>
            <h1 className=' text-5xl mt-15'>
                Accelerate your <span className=' bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>coding Workflow </span>
            </h1>
        </div>
        {/* heading========================================================= */}
        <div className=' flex flex-row items-center justify-center'>
        {/* image============================================================ */}
        <div className=' flex mt-2 h-120 w-120 mx-10'>
            <img src={code} alt="code img" />
        </div>
        {/* image============================================================ */}

        <div className="bg-neutral-900 p-8 rounded-lg mt-4 mr-0">
      {/* Feature 1 */}
      <div className="flex items-start space-x-4 mb-6 text-neutral-300">
        <FiCheckCircle className="text-green-500 w-6 h-6 mt-1 cursor-pointer" />
        <div>
          <h3 className="text-lg font-semibold cursor-pointer">Code merge made easy</h3>
          <p className="text-sm text-neutral-400 mt-1">
            Track the performance of your VR apps and gain insights into user behavior.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex items-start space-x-4 mb-6 text-neutral-300">
        <FiCheckCircle className="text-green-500 w-6 h-6 mt-1 cursor-pointer" />
        <div>
          <h3 className="text-lg font-semibold cursor-pointer">Review code without worry</h3>
          <p className="text-sm text-neutral-400 mt-1">
            Track the performance of your VR apps and gain insights into user behavior.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex items-start space-x-4 mb-6 text-neutral-300">
        <FiCheckCircle className="text-green-500 w-6 h-6 mt-1 cursor-pointer" />
        <div>
          <h3 className="text-lg font-semibold cursor-pointer">AI Assistance to reduce time</h3>
          <p className="text-sm text-neutral-400 mt-1">
            Track the performance of your VR apps and gain insights into user behavior.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex items-start space-x-4 mb-6 text-neutral-300">
        <FiCheckCircle className="text-green-500 w-6 h-6 mt-1 cursor-pointer" />
        <div>
          <h3 className="text-lg font-semibold cursor-pointer">Share work in minutes</h3>
          <p className="text-sm text-neutral-400 mt-1 ">
            Track the performance of your VR apps and gain insights into user behavior.
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Workflow
