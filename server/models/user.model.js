import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   _id: {
    type: String,
    required: true,
   
  },
  name: {
    type: String,
    required: true,
    trim: true, // يشيل المسافات من البداية والنهاية
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // يحول الإيميل للصغير تلقائي
    trim: true,
  },
    resume: {
    type: String,
    
   
  },
  image: {
    type: String,
    default: "", // لو مفيش صورة يبقى فاضية
  },
  skills: {
    type: [String], // مصفوفة من النصوص
    default: [],   // القيمة الافتراضية مصفوفة فاضية
  },
  createdAt: {
    type: Date,
    default: Date.now, // يخزن وقت إنشاء المستخدم تلقائي
  },
});

export const User = mongoose.model("User", userSchema);
