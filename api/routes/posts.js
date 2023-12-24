import express from 'express';
import {addPost,getPosts,deletePost,updatePost,getSinglePost} from "../controllers/postController.js"
const router = express.Router();
//前端组件-index -> (auth)routes -> handler
router.get("/getPosts",getPosts)

router.get("/getSinglePost/:id", getSinglePost)

router.post("/addPost", addPost)

router.delete("/deletePost/:id", deletePost)

router.put("/updatePost/:id", updatePost)

export default router