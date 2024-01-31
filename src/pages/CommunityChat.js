import React, { useState, useEffect } from "react";
import Navbar2 from "../layout/Navbar2";


const DiscussionComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [replies, setReplies] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost:8082/api/questions");
      const fetchedQuestions = await response.json();
      setQuestions(fetchedQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const fetchReplies = async (questionId) => {
    try {
      const response = await fetch(
        `http://localhost:8082/api/replies/${questionId}`
      );
      const fetchedReplies = await response.json();
      setReplies(fetchedReplies);
    } catch (error) {
      console.error(
        `Error fetching replies for question ${questionId}:`,
        error
      );
    }
  };

  const displayReplies = (questionId, replies) => {
    // Implementation remains the same
  };

  const displayQuestions = (questions) => {
    // Implementation remains the same
  };

  const postQuestion = async () => {
    if (newQuestion) {
      try {
        const response = await fetch("http://localhost:8082/api/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: newQuestion,
            // other properties as needed
          }),
        });

        if (response.ok) {
          const savedQuestion = await response.json();
          setQuestions([savedQuestion, ...questions]);
          setNewQuestion("");
        } else {
          console.error("Error posting question:", response.statusText);
        }
      } catch (error) {
        console.error("Error posting question:", error);
      }
    }
  };

  const postReply = async (questionId) => {
    // Implementation remains the same
  };

  return (
    <div>
      <Navbar2 />
      <div>
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
          {/* <button onClick={() => search()}>Search</button> */}
        </div>

        <div id="discussion">{/* Render questions and replies here */}</div>
      </div>
      </div>
      
    </div>
  );
};

export default DiscussionComponent;
