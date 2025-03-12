require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.post("/send-sms", async (req, res) => {
   const { message, to } = req.body;
   if (!message || !to) {
      return res
         .status(400)
         .json({ error: "Message and recipient number (to) are required" });
   }

   const url = `https://connect.jazzcmt.com/sendsms_url.html?Username=${
      process.env.JAZZ_USERNAME
   }&Password=${
      process.env.JAZZ_PASSWORD
   }&From=SK Store&To=${to}&Message=${encodeURIComponent(message)}`;

   try {
      const response = await axios.get(url);
      return res.json({ success: true, data: response.data });
   } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
   }
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
