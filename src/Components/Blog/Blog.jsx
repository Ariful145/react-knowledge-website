import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({id, blog, handleAddToBookmark, handleMarkAsRead }) => {
   const { title, cover, reading_time, posted_date, author, hash_tag, img } =
      blog;
   return (
      <div className="mb-20 space-y-4">
         <img
            className="w-full mb-8"
            src={cover}
            alt={`cover picture of the title ${title}`}
         />
         <div className="flex justify-between ">
            <div className="flex">
               <img className="w-14" src={img} alt="" />
               <div className="ml-6">
                  <h3 className="text-2xl">{author}</h3>
                  <p>{posted_date}</p>
               </div>
            </div>
            <div>
               <span>{reading_time} min read</span>
               <button onClick={()=>handleAddToBookmark(blog)} className="text-2xl ml-2 text-red-600">
                  <FaBookmark></FaBookmark>
               </button>
            </div>
         </div>

         <h2 className="text-4xl mb-4"> {title}</h2>
         <p>
            {hash_tag.map((hash, idx) => (
               <a href="">
                  <span key={idx} hash={hash}>
                     #{hash}
                  </span>
               </a>
            ))}
         </p>
         <button 
         onClick={()=>handleMarkAsRead(id,reading_time)}
         className="text-purple-800  font-bold underline">Mark As Read</button>
      </div>
   );
};

Blog.PropTypes = {
   blog: PropTypes.object.isRequired,
   handleAddToBookmark: PropTypes.func,
   handleMarkAsRead: PropTypes.func
};

export default Blog;
