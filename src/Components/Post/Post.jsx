import React from 'react'
import PostPicOne from '../../img/postpic1.jpg'
import PostPicTwo from '../../img/postpic2.jpg'
import PostPicThree from '../../img/postpic3.JPG'
import likeIcon from '../../img/like.png'
import commentIcon from '../../img/comment.png'
import shareIcon from '../../img/share.png'
import './Post.css'

const Post = () => {
  return (
    <>
    <div className="card">
        <div className="postImage">
            <img src={PostPicOne} alt="post_image" />
        </div>
        <div className="actions">
            <img src={likeIcon} alt="" />
            <img src={commentIcon} alt="" />
            <img src={shareIcon} alt="" />
        </div>
        <p className='likes'>2300 likes</p>
        <p className='content'><b>Tzuyu</b> Happy New Year Friends! #2023</p>
    </div>
    <div className="card">
        <div className="postImage">
            <img src={PostPicTwo} alt="post_image" />
        </div>
        <div className="actions">
            <img src={likeIcon} alt="" />
            <img src={commentIcon} alt="" />
            <img src={shareIcon} alt="" />
        </div>
        <p className='likes'>2300 likes</p>
        <p className='content'><b>Tzuyu</b> Happy New Year Friends! #2023</p>
    </div>
    <div className="card">
        <div className="postImage">
            <img src={PostPicThree} alt="post_image" />
        </div>
        <div className="actions">
            <img src={likeIcon} alt="" />
            <img src={commentIcon} alt="" />
            <img src={shareIcon} alt="" />
        </div>
        <p className='likes'>2300 likes</p>
        <p className='content'><b>Tzuyu</b> Happy New Year Friends! #2023</p>
    </div>
    </>
    

    
  )
}

export default Post