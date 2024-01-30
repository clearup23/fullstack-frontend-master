import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";


const Discussion = () => {
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser") || ""
  );
  const [newQuestion, setNewQuestion] = useState("");
  const [discussion, setDiscussion] = useState([]);

  const [newReply, setNewReply] = useState(""); // Add this line


  const postQuestion = () => {
    if (loggedInUser && newQuestion) {
      const newDiscussion = [...discussion];
      newDiscussion.push({
        user: loggedInUser,
        question: newQuestion,
        replies: [],
      });

      setDiscussion(newDiscussion);
      setNewQuestion("");
    }
  };

    const postReply = (questionIndex, replyContent) => {
      if (loggedInUser && replyContent) {
        const newDiscussion = [...discussion];
        newDiscussion[questionIndex].replies.push({
          user: loggedInUser,
          reply: replyContent,
          thumbsUpCount: 0,
          hasClicked: false,
        });

        setDiscussion(newDiscussion);
      }
    };

  const thumbsUp = (questionIndex, replyIndex) => {
    const newDiscussion = [...discussion];
    const reply = newDiscussion[questionIndex].replies[replyIndex];

    if (!reply.hasClicked) {
      reply.hasClicked = true;
      reply.thumbsUpCount += 1;
    }

    setDiscussion(newDiscussion);
  };

  const search = () => {
    // Implement search functionality as needed
    alert("Implement search functionality here");
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser("");
  };

  // Sample initial discussion
  if (!loggedInUser) {
    localStorage.setItem("loggedInUser", "Student123");
    setLoggedInUser("Student123");
  }

  return (
    <>
      

      <div className="welcome-message">Welcome to the Community !!</div>

      <div className="discussion-container">
        <div className="action-buttons">
          <input
            type="text"
            id="new-question"
            placeholder="Ask a question..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <button onClick={postQuestion}>Post</button>
          <button onClick={search}>Search</button>
        </div>

        <div id="discussion">
        {discussion.map((item, questionIndex) => (
          <div key={questionIndex} className="question">
            <p>{`${item.user}: ${item.question}`}</p>
            <div>
              <input
                type="text"
                className="reply-input"
                placeholder="Reply..."
                onChange={(e) => setNewReply(e.target.value)}
              />
              <button onClick={() => postReply(questionIndex, newReply)}>Reply</button>
            </div>
            <div className="replies">
              {item.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="reply">
                  <p>{`${reply.user}: ${reply.reply}`}</p>
                  <div className="reply-icons">
                    <i
                      className={`fas fa-thumbs-up thumbs-up ${reply.hasClicked ? 'clicked' : ''}`}
                      onClick={() => thumbsUp(questionIndex, replyIndex)}
                    ></i>
                    <span className="thumbs-up-count">{reply.thumbsUpCount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Discussion;
