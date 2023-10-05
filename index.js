import express from "express";
import { BardAPI } from "bard-api-node";

const app = express();
const assistant = new BardAPI();
const __Secure_1PSID =
  "bggSzbEQT6_TQbjPln4-BCsZcuC63FTZ2YTSfxuci6yicIeouz4yqFq9j9im26C4U0THLA.";

(async () => {
  try {
    await assistant.setSession("__Secure-1PSID", __Secure_1PSID);
  } catch (error) {
    console.error("Error:", error);
  }
})();

const Q = async (q) => {
  try {
    const response = await assistant.getBardResponse(q);
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};

app.get("/BardApi/:q", async (req, res) => {
  const { q } = req.params;
  const response = await Q(q);
  res.status(200).json({ message: response.content, response });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
