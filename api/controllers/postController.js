import { db } from "../db.js"
import jwt from "jsonwebtoken";
export const getPosts = (req, res) => {

    const q = req.query.cat
        ? "SELECT * FROM posts WHERE cat=?"
        : "SELECT * FROM posts";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

export const getSinglePost = (req, res) => {
    const q =
        "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.userId WHERE p.id = ? ";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
};

export const addPost = (req, res) => {
    const q = "INSERT INTO posts(`title`, `desc`,`img`,`cat`,`date`,`userId`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat,
        req.body.date,
        req.body.userId
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.json("post has been successfully created")
    })
}

export const deletePost = (req, res) => {
    //if (token == null) return res.status(401).json("Not authenticated !");
    //.json("message") 这个message会出现在控制台network的网络请求response里
    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id`=?";
    db.query(q, [postId], (err, data) => {
        return res.status(200).json("Post has been successfully deleted")
    })

}

export const updatePost = (req, res) => {
    const q =
    "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ?";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat
    ]
    const postId = req.params.id;
    db.query(q,[...values,postId],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.json("post has been successfully updated")
    })
}






postMessage.map((eachPost)=>{
    return(
        <div></div>
    )
})