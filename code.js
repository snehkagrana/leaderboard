const mongoose = require('mongoose');
const { Schema } = mongoose;

// Apna databse connect karna hai
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const LeaderboardSchema = new Schema({
  // Define schema fields here, e.g.:
  name: String,
  score: Number,
});

const LeaderboardModel = mongoose.model('Leaderboard', LeaderboardSchema);

async function initData() {
  try {
    const leaderboardArrayList = await LeaderboardModel.find().exec();
// May need to define a custom sorting function here
    leaderboardArrayList.sort(); 

    if (leaderboardArrayList.length > 10) {
      leaderboardArrayList.splice(10);
    }

    // Implement further processing, e.g., updating the UI or sending the data to the client
    console.log(leaderboardArrayList);
  } catch (error) {
    console.error('Could not load leaderboard at this moment:', error);
  }
}

initData();
