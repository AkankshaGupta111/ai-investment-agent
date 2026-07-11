import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema(
  {
    company: String,
    symbol: String,
    price: Number,
    decision: String,
    confidence: Number,
    summary: String,
    pros: [String],
    cons: [String],
    news: Array,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Analysis ||
  mongoose.model("Analysis", AnalysisSchema);