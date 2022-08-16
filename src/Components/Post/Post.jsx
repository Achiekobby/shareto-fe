import React, {useState} from 'react'
import likeIcon from '../../img/like.png'
import NotLikeIcon from '../../img/notlike.png'
import commentIcon from '../../img/comment.png'
import shareIcon from '../../img/share.png'
import './Post.css'

import posts from '../../Data/PostsData'

const Post = () => {
  const [liked, setLiked] = useState(false)
  return (
    <div className='post_container'>
    {
        posts.map((post, index)=>{
            const {img, name, desc, likes} = post
            return    <div key={index} className="card">
            <div className="postImage">
                <img src={img} alt="post_image" />
            </div>
            <div className="actions">
                <img src={liked ? likeIcon : NotLikeIcon} alt="" onClick={()=>setLiked(!liked)} />
                <img src={commentIcon} alt="" />
                <img src={shareIcon} alt="" />
            </div>
            <p className='likes'>{likes} likes</p>
            <p className='content'><b>{name}</b> {desc}</p>
        </div>
        })
    }
    </div>
    

    
  )
}

export default Post