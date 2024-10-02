import { posts } from "@/app/common/constant";
import Titleoverlay from "./titleoverlay";
import { poppins } from "../fonts";
import PostCard from "./postcard";

export default function Blogs() {
    return(
        <div id="experiences" className={`${poppins.className} expWrapper pt-10 md:pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-white`}>
            <Titleoverlay overlayText="My Blogs" subTitle="Explore My Blog" mainTitle="Latest Articles"/>
            <div className="flex flex-wrap gap-3 postsWrapper mt-8">
                {posts.map((post,index)=>(
                    <PostCard key={index} {...post} />
                ))}
            </div>
        </div>
    )
}