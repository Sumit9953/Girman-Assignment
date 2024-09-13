import connectToDatabase from "../../utils/db";
import User from "../../models/User";

export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "No search query provided" });
  }

  try {
    await connectToDatabase();

    // Query the database for users matching the search query
    const filteredUsers = await User.find({
      $or: [
        { first_name: new RegExp(query, "i") },
        { last_name: new RegExp(query, "i") },
      ],
    });

    if (filteredUsers.length === 0) {
      return res.status(404).json({ message: "No results found" });
    }

    res.status(200).json(filteredUsers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}
