import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

function QuizPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState(Array(10).fill(""));
  const [resultMessage, setResultMessage] = useState("");
  
  const questions = [
    "How would you rate your overall mental health?",
    "Do you often experience feelings of sadness or hopelessness?",
    "How well do you cope with stress in your daily life?",
    "Have you ever sought professional help for mental health concerns?",
    "Do you engage in regular physical activity or exercise?",
    "How well do you sleep at night?",
    "Have you ever experienced panic attacks or severe anxiety?",
    "How often do you engage in activities that you enjoy and find fulfilling?",
    "Are you satisfied with your relationships and social connections?",
    "Do you have a strong support system of friends and family?"
  ];

  const handleChange = (value) => {
    const newResponses = [...responses];
    newResponses[currentPage] = value;
    setResponses(newResponses);
  };

  const goToNextQuestion = () => {
    if (currentPage < questions.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resetResponses = () => {
    setResponses(Array(10).fill(""));
    setCurrentPage(0);
    setResultMessage("");
  };

  const submitQuestionnaire = () => {
    // Calculate total points
    const totalPoints = responses.reduce((acc, response) => acc + parseInt(response), 0);

    // Determine mental health status based on total points
    let message = "";
    if (totalPoints >= 36) {
      message = "Your mental health is excellent!";
      setResultMessage({ text: message, color: "green" });
    } else if (totalPoints >= 24) {
      message = "Your mental health is good.";
      setResultMessage({ text: message, color: "yellow" });
    } else if (totalPoints >= 12) {
      message = "Your mental health needs attention. Consider seeking help.";
      setResultMessage({ text: message, color: "orange" });
    } else {
      message = "Your mental health needs immediate attention. Please seek help.";
      setResultMessage({ text: message, color: "red" });
    }
  };

  return (
    <DashboardLayout>
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.title}>Mental Health Questionnaire</h1>
        <div style={styles.questionContainer}>
          <label style={styles.question}>{currentPage + 1}. {questions[currentPage]}</label><br />
          <div style={styles.optionContainer}>
            <input
              type="radio"
              name="response"
              value="4"
              checked={responses[currentPage] === "4"}
              onChange={() => handleChange("4")}
            />Excellent
            <input
              type="radio"
              name="response"
              value="3"
              checked={responses[currentPage] === "3"}
              onChange={() => handleChange("3")}
            />Good
            <input
              type="radio"
              name="response"
              value="2"
              checked={responses[currentPage] === "2"}
              onChange={() => handleChange("2")}
            />Fair
            <input
              type="radio"
              name="response"
              value="1"
              checked={responses[currentPage] === "1"}
              onChange={() => handleChange("1")}
            />Poor
          </div>
        </div>
        <div style={styles.buttonContainer}>
          {currentPage > 0 && (
            <button style={styles.button} type="button" onClick={goToPreviousQuestion}>Previous</button>
          )}
          {currentPage < questions.length - 1 ? (
            <button style={styles.button} type="button" onClick={goToNextQuestion}>Next</button>
          ) : (
            <>
              <button style={styles.button} type="button" onClick={resetResponses}>Reset</button>
              <button style={styles.button} type="button" onClick={submitQuestionnaire}>Submit</button>
            </>
          )}
        </div>
        {resultMessage && (
          <div style={{ ...styles.resultMessage, backgroundColor: resultMessage.color }}>
            {resultMessage.text}
          </div>
        )}
      </div>
    </div>
    </DashboardLayout>
  );
}

const styles = {
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#8e44ad', // Purple background color
  },
  container: {
    width: '40%',
    padding: '20px',
    backgroundColor: '#fff', // White container background color
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '30px',
    color: '#8e44ad', // Purple title color
  },
  questionContainer: {
    marginBottom: '40px',
  },
  question: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#555',
  },
  optionContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '20px',
    marginRight:'0px',
  },
  optionInput: {
    marginRight: '5px', // Adjusted margin between input and text
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#8e44ad', // Purple button background color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    marginRight: '10px',
  },
  resultMessage: {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    color: '#fff',
  },
};

export default QuizPage;
