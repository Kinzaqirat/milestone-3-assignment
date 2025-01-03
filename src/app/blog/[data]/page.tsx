"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import rich from "../../../public/richdad.png"
import power from "../../../public/power.png"
import atomic from "../../../public/atomic.png"
import Comment from '@/components/comment'

export default function BlogData() {
    const {data}= useParams();
    if (!data){
        return <p>NO DATA</p>
    }
    const Data2={
    '1': {
           title:"Rich Dad Poor Dad" ,
            image:rich,
            description :"Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy (financial education), financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence (financial IQ)."
        },
    '2':  {
            image:power,
            title:"Power of your subconscious mind " ,
            description:"Our subconscious mind has the ability to influence your beliefs and attitudes and direct your thoughts, desires and purpose. Dreams originate from our subconscious mind, they can reveal our deepest needs, fears, and desires. This post is about a book written by Dr. Joseph Murphy, a psychologist who talks about his experience and the capabilities of our subconscious mind."
        },
     '3':  {
            image:atomic,
            title:" Atomic Habits " ,
            description:"Atomic Habits presents a proven system for building good habits and breaking bad ones. The key to building lasting habits is focusing on creating a new identity first. Your current behaviors are simply a reflection of your current identity."
        }
       
    }
    const post = Data2[data as keyof typeof Data2];
    
    
    if (!post) {
        return <p>Blog post not found!</p>;
      }
  return (
    <div className='py-11 flex justify-center items-center    pl-11'>
      <div className=' w-[500px]   '>
<p className='font-bold text-2xl text-orange-500 text-center '> {post.title}</p>
<br />





<div className='items-center flex justify-center'>
<Image src={post.image} alt='' className='w-[300px] h-[400px] rounded-lg shadow '></Image>
</div>
  
 <div>
  
 <p className='text-lg text-center '>Description: </p>
  <p className='text-center'>{post.description} </p>
 </div>
  

</div>
{/* <Comment/> */}

</div>
  )
}
