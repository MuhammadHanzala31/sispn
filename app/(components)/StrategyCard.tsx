import React from 'react'

export default function StrategyCard({title, description} : {title : string, description : string}) {
  return (
    <div className='flex flex-col justify-center items-center gap-3.5 p-5 rounded-lg bg-[#662C6D]'>
        <h5 className='text-3xl text-white text-center'>{title}</h5>
        <p className='text-white text-xl text-center'>
            {description}
        </p>
    </div>
  )
}
