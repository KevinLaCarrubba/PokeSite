import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";

const CommentForm = ({ _id }) => {
  const [commentText, setCommentText] = useState("");

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: { _id, commentText },
      });

      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
    }
  };

  return (
    <div>
      <img
        src="https://fontmeme.com/permalink/211018/bd58c745aa44bc5633d5995063f32b57.png"
        alt="pokemon-font"
        border="0"
      />
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <textarea
            name="commentText"
            placeholder="Add your comment..."
            value={commentText}
            className="form-input w-100"
            style={{ lineHeight: "1.5" }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-3">
          <button className="buttonStyle" type="submit">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
