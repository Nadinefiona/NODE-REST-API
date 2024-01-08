import mongoose from "mongoose";
import app from "./app";


mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://nadine_100:Th0uWOS7nvTCz2nM@cluster0.6zhup.mongodb.net/?retryWrites=true&w=majority.DATABASE_LOCAL", {})
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
