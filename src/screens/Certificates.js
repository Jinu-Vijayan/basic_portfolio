import React from 'react'
import web_resp_certificate from '../assets/images/responsive_web_cert.png'
import CertificateCard from '../components/CertificateCard'

const certificateData = [
  {
    name : "Responsive Web design",
    certified_by : "freeCodeCamp",
    image : web_resp_certificate,
    certificate_link : 'https://www.freecodecamp.org/certification/fcc7c24d516-46c2-4b5b-8770-c9c78131a3ec/responsive-web-design'
  }
]

const Certificates = () => {
  return (
    <div className='p-4 shadow-md mt-6 rounded-xl font-sans' style={{
      backgroundColor : "#1d618c"
    }}>
      <h1 className=' text-4xl font-bold mb-4 '>Certificates</h1>
      <div>
        {
          certificateData.map((elem,index)=>{
            return <CertificateCard name = {elem.name} certifiedBy = {elem.certified_by} image = {elem.image} certificateLink = {elem.certificate_link} key={index}  />
          })
        }
      </div>
    </div>
  )
}

export default Certificates