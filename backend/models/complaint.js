const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String, // Changed to String type
        required: true
    },
    complain: {
        type: String, // Changed to String type
        required: true
    },
});

const Complaint = mongoose.model("Complaint", complaintSchema);
module.exports = Complaint;