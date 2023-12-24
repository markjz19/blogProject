import express from 'express'
import postRoutes from "./routes/posts.js"
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js'
import cors from "cors"
import cookieParser from 'cookie-parser';
import multer from "multer"
const app = express();
//must have this otherwise cors issue
//midware
app.use(cors())
app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/uploadFolder");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });

const uploadFile = multer ({storage:storage})

app.post('/api/upload',uploadFile.single('file'),function(req,res){
      const file = req.file
      res.status(200).json(file.filename)
})

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);



//前端组件-index -> (auth)routes -> handler

app.listen(8800, () => {
    console.log('now connected !!!')
}
)

