import React from 'react'
import Post from '../Post/Post'
import PostCard from '../PostCard/PostCard'
import './PostField.css'
const PostField = () => {
  return (
    <div className="post_field">
        <PostCard/>
        <Post/>
    </div>
  )
}

export default PostField