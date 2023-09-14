import React from "react";
import PropTypes from "prop-types";
import { prototype } from "postcss/lib/previous-map";

const Bookmarks = ({ bookmarks, readingTime }) => {
   return (
      <div className="md:w-3/2">
         <div>
            <h3 className="text-4xl">Reading Time: {readingTime}</h3>
         </div>
         <div className="text-center justify-center bg-gray">
            <h2 className="text-3xl"> Bookmarks: {bookmarks.length}</h2>
            <ul>
               {bookmarks.map((bookmark, idx) => (
                  <li
                     className="bg-slate-200 p-4 m-4 rounded-xl text-2xl"
                     key={idx}
                  >
                     {bookmark.title}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

Bookmarks.propTypes = {
   bookmarks: PropTypes.array,
   readingTime: PropTypes.number,
};

export default Bookmarks;
