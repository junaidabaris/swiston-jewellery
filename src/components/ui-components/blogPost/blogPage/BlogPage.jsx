import React from 'react'
import './BlogPage.css'
import './Mobile_blogPage.css'
import First_front_Bannar from '../componants/First_front_Bannar'
import BlogCards from '../componants/BlogCards'
import { TbArrowCurveLeft } from "react-icons/tb";
import Second_hero from '../componants/Second_hero'
import YoutubSection from '../componants/YoutubSection'
 
const BlogPage = () => {
  return (
    <div className='_blog_page'>
        <First_front_Bannar/>
       <div className='_blogsCards'>
        <BlogCards/>
        <div style={{textAlign:'right'}} className='view_more'>
            View all <span ><TbArrowCurveLeft fontSize={'40px'}/> </span>
        </div>
       </div>
       <div className='pt-2'>
        <Second_hero/>
       </div>
       <div className='' style={{background:'#000'}}>
        <YoutubSection/>
       </div>
    </div>
  )
}

export default BlogPage