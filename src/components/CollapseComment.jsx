import { useState } from "react";

const CollapseComment = ({ children }) => {
  const [visibleComment, setVisibleComment] = useState(false);

  const handleClick = () => {
    setVisibleComment((currentVisibility) => {
      return !currentVisibility;
    });
  };

  return (
    <section>
      <button onClick={handleClick}>
        {visibleComment ? "Hide comments" : "Show comments "}
      </button>
      {visibleComment && children}
    </section>
  );
};

export default CollapseComment;
