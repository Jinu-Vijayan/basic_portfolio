import React from 'react'

const PersonalDetailsCard = ({icon, title, data}) => {
  return (
    <div className='flex  items-center gap-5 '>
        <div className='p-2.5 bg-black rounded-xl flex justify-center items-center size-fit'>
            {icon}
        </div>
        <div>
            <p className='text-white'>{title}</p>
            <p>{data}</p>
        </div>
    </div>
  )
}

export default PersonalDetailsCard