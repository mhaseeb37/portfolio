import Slidecard from "./slidecard";

export default function Slidebox({slide}) {
    return(
        <div className="relative border bg-[#ffffff] p-3 md:p-10 border-[#ffffff] before:block before:absolute before:-inset-0 before:rotate-0 before:w-full before:border before:border-[#ffffff] before:z-[-1] before:transition-transform before:duration-300 after:block after:absolute after:-inset-0 after:-rotate-0 after:w-full after:border after:border-[#ffffff] after:z-[-1] after:transition-transform after:duration-300 hover:before:rotate-2 hover:after:-rotate-2">
            
                <Slidecard data={slide} />
            
          </div>
    )
}