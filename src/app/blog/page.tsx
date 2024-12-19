
import Image from 'next/image'
import React from 'react'
import atomic from "../../public/atomic.png"
import richdad from "../../public/richdad.png"
import power from "../../public/power.png"
import Link from 'next/link'

export default function Blog() {
    const Data1=[
        {id:1,
            image:richdad,
title:"Rich Dad Poor Dad",
author:"Robert Kiyosaki"
        },{
            id:2,
            image:power,
            title:"Power of your Subconscious Mind ",
            author:"Joseph Murphy"
        },{
            id:3,
            image:atomic,
            title:"Atomic Habits",
            author:"James Clear"

        }
    ]
  return (
    <div>
      <div className='grid grid-cols-3 py-9 pl-20 max-sm:grid max-sm:grid-cols-1 max-sm:gap-10 md:grid-cols-2 sm:grid-cols-1 md:gap-10 lg:grid-cols-2 xl:grid-cols-3' >
{Data1.map((items)=>(
<div className='border w-[350px] h-[500px]  rounded-lg shadow max-sm:w-[300px] max-sm:h-[540px]'>
<Image src={items.image} alt='' className='w-[300px] h-[300px] ml-9 mt-6 rounded-lg max-sm:w-[250px] max-sm:ml-5' ></Image>
<br />
<p className='ml-5 text-xl'>{items.title}</p>
<br />
<p className='ml-5 text-xl '>{items.author}</p>
<br />
<button  key={items.id} className='ml-5 text-lg w-[100px] h-[40px] bg-slate-400 rounded-lg'><Link href={`/blog/${items.id}`}>Veiw more</Link></button>
</div>
))}
      </div>


    </div>
  )
}
