const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // serve static files

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// GET: Show the form
app.get("/", (req, res) => {
  res.render("form", {
    title: "Contact Form",
    heading: "Send a Message",
    message: null,
    form: {}
  });
});

// POST: Handle form submission
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  res.render("form", {
    title: "Form Submitted",
    heading: "Message Received!",
    message: `Thanks ${name}, we got your message.`,
    form: { name, email, message }
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
