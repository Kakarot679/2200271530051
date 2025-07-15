const axios = require("axios");


const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJndXB0YTIyMTUzMDYzQGFrZ2VjLmFjLmluIiwiZXhwIjoxNzUyNTYwMTAwLCJpYXQiOjE3NTI1NTkyMDAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5MzBhM2Q2OC1lNWNhLTQ4YjItYTUwYy03NTk2ZTQ1NDc2NzIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJoYXJkaWsgZ3VwdGEiLCJzdWIiOiIxOTQxOTliZC1hMzFiLTQ4ZjQtODY2ZC0xYTY4YzBkNzRjNDgifSwiZW1haWwiOiJndXB0YTIyMTUzMDYzQGFrZ2VjLmFjLmluIiwibmFtZSI6ImhhcmRpayBndXB0YSIsInJvbGxObyI6IjIyMDAyNzE1MzAwNTEiLCJhY2Nlc3NDb2RlIjoidXVNYnlZIiwiY2xpZW50SUQiOiIxOTQxOTliZC1hMzFiLTQ4ZjQtODY2ZC0xYTY4YzBkNzRjNDgiLCJjbGllbnRTZWNyZXQiOiJDck5RbWdOR3VYendjS1htIn0.Vu-cLZ5iUlei9EPpc6Zr0S3FYP-T6-HB_GzG76qTs2k";
// Send log to remote server
const logError = async (error) => {
  try {
    await axios.post("http://20.244.56.144/evaluation-service/logs", {
      stack: "backend",      
      level: "error",          
      package: "handler",       
      message: error.message
    }, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`  
      }
    });
    console.log("✅ Log sent successfully");
  } catch (err) {
    console.error("❌ Failed to send log:", err.message);
  }
};


const loggerMiddleware = (err, req, res, next) => {
  logError(err);  
  next(err);
};

module.exports = loggerMiddleware;
