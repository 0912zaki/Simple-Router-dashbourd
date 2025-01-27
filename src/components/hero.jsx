const Hero = () => {
    return <div className=" flex gap-8 pt-20">
        <div className="bg-amber-700gray-500 w-60 h-28 rounded-2xl ">
            <h1 className="text-4xl text-white text-center">Student</h1>
        </div>
        <div className="bg-blue-500 w-60 h-28 rounded-2xl ">
            <h1 className="text-4xl text-white text-center">Teacher</h1>
        </div>
        <div className="bg-red-500 w-60 h-28 rounded-2xl ">
            <h1 className="text-4xl text-white text-center">Courses</h1>
        </div>
    </div>
}

export default Hero