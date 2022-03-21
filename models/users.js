import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    jobStatus: {
      type: String,
      required: true,
    },
    minSalary: {
      type: Number,
      required: true,
    },
    maxSalary: {
      type: Number,
      required: true,
    },
  },
  { strict: false } // when using strict: false there is no limitation on adding new fields to the schema on the frontend. So, we only limit the schema to the required fields.
);

const userSchema = new mongoose.Schema({
  // id will be automatically created from auth0 and we are making the field mandatory.
  _id: {
    type: String,
    required: true,
  },
  jobs: [jobSchema],
});

export default mongoose.model("User", userSchema);
