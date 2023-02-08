import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://mongo:pSO4lXMrxVVVbdEEk1sv@containers-us-west-139.railway.app:5824")
  .then((db) => console.log(`connecting to database: ${db.connection.name}`))
  .catch((err) => console.error(err));
