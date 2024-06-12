import React from 'react'

const CertificateCard = ({name, certifiedBy, image, certificateLink}) => {
  return (
    <div>
        <h2 className='text-xl font-bold 'style={{
          color : "#8fd4ff"
        }}>{name}</h2>
        <p  style={{
          color : "#d9d3d3"
        }} >by : {certifiedBy}</p>
        <a href={certificateLink} target='_blank'>
            <img src={image} alt={`thumbnail of certificate of ${name} by ${certifiedBy}`}/>
        </a>
    </div>
  )
}

export default CertificateCard