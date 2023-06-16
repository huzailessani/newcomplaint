
const express = require("express");
const router = express.Router();
const Complaint = require("../models/complaint");

// Assuming you have already set up your Express app and imported necessary dependencies

router.get('/complaint', async (req, res) => {
    try {
        // Implement your logic to fetch and return the complaint data from your database or any other source
        const complaints = await Complaint.find({}); // Assuming you have a Complaint model
        res.status(200).json(complaints);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch complaints' });
    }
});


router.post("/complaint", (req, res) => {
    const complaint = new Complaint({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
        complain: req.body.complain, // Make sure this value is a string


    })
    complaint
        .save()
        .then(() => {
            res.status(201).json({ message: "User complaint registered successfully!" });
        })
        .catch((err) => {
            res.status(500).json({ error: "Failed to register complaint." });
        });
})

module.exports = router