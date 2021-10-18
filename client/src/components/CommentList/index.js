import React from "react";
import "./style.css";
const CommentList = ({ comments = [] }) => {
  console.log(comments);
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3 className="p-5 display-inline-block">Comments</h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header userName">Anonymous </h5>
                <p className="card-body commentText">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
