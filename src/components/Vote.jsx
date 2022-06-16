import { useState } from "react";
import { votePatch } from "../utils/api";

const Votes = ({ articleId, votes }) => {
  const [showVote, setShowVote] = useState(votes);
  const [button, setButton] = useState({ plus: false, minus: true });

  const handleClick = (voteInc) => {
    setShowVote((currVote) => currVote + voteInc);
    setButton((currButton) => {
      const newButton = { ...currButton };
      if (voteInc === 1) {
        newButton.plus = true;
        newButton.minus = false;
      }
      if (voteInc === -1) {
        newButton.minus = true;
        newButton.plus = false;
      }
      return newButton;
    });
    votePatch(articleId, voteInc).catch(() => {
      setShowVote((currVote) => currVote - voteInc);
      setButton((currButton) => {
        return { plus: false, minus: true };
      });
    });
  };

  return (
    <main>
      <h4>Likes: {showVote}</h4>
      <button
        className={`button_${button.plus}`}
        onClick={() => {
          handleClick(1);
        }}
      >
        I like it!
      </button>
      <button
        className={`button_${button.minus}`}
        id="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-green"
        onClick={() => {
          handleClick(-1);
        }}
      >
        I don't like it!
      </button>
    </main>
  );
};

export default Votes;
