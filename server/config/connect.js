const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb://mdzeeshanDigOrbit:digOrbitDB@mdzeeshanDigOrbit/?ssl=true&replicaSet=atlas-gv5l32-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = { dbConnect };
