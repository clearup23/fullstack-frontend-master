// CommunityChat.js

import React, { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:8080/api"; // Replace with your Spring Boot server URL

const CommunityChat = () => {
  const [loggedInUser, setLoggedInUser] = useState("Student123");
  const [newQuestion, setNewQuestion] = useState("");
  const [discussion, setDiscussion] = useState([]);

  useEffect(() => {
    // Fetch top 10 questions on component mount
    fetch(`${API_BASE_URL}/topQuestions`)
      .then((response) => response.json())
      .then((data) => setDiscussion(data))
      .catch((error) => console.error("Error fetching top questions:", error));
  }, []);

  const postQuestion = () => {
    if (loggedInUser && newQuestion) {
      // Post question to the server
      fetch(`${API_BASE_URL}/postQuestion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: loggedInUser, question: newQuestion }),
      })
        .then(() => setNewQuestion(""))
        .catch((error) => console.error("Error posting question:", error));
    }
  };

  const postReply = (questionId, replyContent) => {
    if (loggedInUser && replyContent) {
      // Post reply to the server
      fetch(`${API_BASE_URL}/postReply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionId,
          user: loggedInUser,
          content: replyContent,
        }),
      }).catch((error) => console.error("Error posting reply:", error));
    }
  };

  const thumbsUp = (replyId) => {
    // Update thumbs up count on the server
    fetch(`${API_BASE_URL}/thumbsUp`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ replyId }),
    }).catch((error) => console.error("Error counting thumbs up:", error));
  };

  return (
    <div>
      <div className="welcome-message">
        {loggedInUser
          ? `Welcome, ${loggedInUser}!!`
          : "Welcome to the Community !!"}
      </div>

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
          <button onClick={() => alert("Implement search functionality here")}>
            Search
          </button>
        </div>

        <div id="discussion">
          {discussion.map((item) => (
            <div key={item.id} className="question">
              <p>
                {item.user}: {item.question}
              </p>
              <div>
                <input
                  type="text"
                  className="reply-input"
                  placeholder="Reply..."
                  onChange={(e) => setNewQuestion(e.target.value)}
                />
                <button onClick={() => postReply(item.id, newQuestion)}>
                  Reply
                </button>
              </div>
              <div className="replies">
                {item.replies.map((reply) => (
                  <div key={reply.id} className="reply">
                    <p>
                      {reply.user}: {reply.content}
                    </p>
                    <div className="reply-icons">
                      <i
                        className={`fas fa-thumbs-up thumbs-up ${
                          reply.hasClicked ? "clicked" : ""
                        }`}
                        onClick={() => thumbsUp(reply.id)}
                      ></i>
                      <span className="thumbs-up-count">
                        {reply.thumbsUpCount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityChat;
