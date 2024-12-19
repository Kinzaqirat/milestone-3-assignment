import React from 'react'

export default function Comment() {
  return (
    <div className='flex justify-center  py-10'>
      <div className='w-[400px] h-[400px] border shadow '>
        <h1 className='text-center font-bold text-orange-500 text-xl'>Comments</h1>
        <br />
        <br />

<div className='items-center flex justify-center'>
    <input type="text" placeholder='Name' className='w-[200px] bg-slate-200 rounded-lg' />
</div>
<br />
<div className='items-center flex justify-center '>
    <input type="text" placeholder='Phone' className='w-[200px] bg-slate-200 rounded-lg' />
</div>
<br />
<div className='items-center flex justify-center '>
    <input type="text" placeholder='E-mail' className='w-[200px] bg-slate-200 rounded-lg' />
</div>
<br />
<div className='items-center flex justify-center '>
    <textarea  placeholder='Message' rows={4} className='w-[200px] bg-slate-200 rounded-lg' />
</div>
<br />
<div className='items-center flex justify-center '>
    <button className='bg-orange-500 w-[150px] h-[40px] text-white  rounded-lg'>Sumit </button>
</div>

      </div>
    </div>
  )
}
