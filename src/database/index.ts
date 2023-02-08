import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://0.0.0.0/movies")
  .then((db) => console.log(`connecting to database: ${db.connection.name}`))
  .catch((err) => console.error(err));
