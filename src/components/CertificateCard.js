import React from 'react'

const CertificateCard = ({name, certifiedBy, image, certificateLink}) => {
  return (
    <div>
        <h2 className='text-xl font-bold text-blue-500'>{name}</h2>
        <p className='text-gray-500'>by : {certifiedBy}</p>
        <a href={certificateLink} target='_blank'>
            <img src={image} alt={`thumbnail of certificate of ${name} by ${certifiedBy}`}/>
        </a>
    </div>
  )
}

export default CertificateCard