import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Define a schema for the contact form
const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

// Create a model for the contact form
const Contact = mongoose.model("Contact", contactSchema);

// Default route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

// POST route for contact form
app.post("/api/contact", async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  if (!fullName || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send({ message: "Message submitted successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).send({ error: "Failed to submit the form. Please try again later." });
  }
});

// GET route to retrieve all contact form submissions
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find(); // Retrieve all documents from the "contacts" collection
    res.status(200).json(contacts); // Send the retrieved data as a JSON response
  } catch (error) {
    console.error("Error retrieving contacts:", error); // Log the error
    res.status(500).send({ error: "Failed to retrieve contacts. Please try again later." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});