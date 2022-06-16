import { useState } from "react";
import { votePatch } from "../utils/api";

const Votes = ({ articleId, votes }) => {
  const [showVote, setShowVote] = useState(votes);

  const handleClick = (voteInc) => {
    setShowVote((currVote) => currVote + voteInc);

    votePatch(articleId, voteInc).catch(() => {
      setShowVote((currVote) => currVote - voteInc);
    });
  };

  return (
    <main>
      <h4>Likes: {showVote}</h4>
      <button
        onClick={() => {
          handleClick(1);
        }}
        // disabled={showVote > 0}
      >
        I like it!
      </button>
      <button
        onClick={() => {
          handleClick(-1);
        }}
        // disabled={showVote > 0}
      >
        I don't like it!
      </button>
    </main>
  );
};

export default Votes;
