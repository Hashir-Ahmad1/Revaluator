import React from 'react'
import OurTeamCard from '@/app/components/LandingPage/ourTeamCard'

const OurTeam = () => {
  return (
    <>
      {/*left column*/}
      <div className="flex flex-col items-center justify-between" style={{width:'322px', height:'900px'}}>
          <OurTeamCard
          picture="/shazil.jpeg" 
          name="Muhammad Shazil" 
          position="Backend Dev" 
          socialMedia={["/linkedIn.svg", "/github.svg", "facebook.svg"]} /> 

          <OurTeamCard
          picture="/asim.jpeg" 
          name="Asim Ali" 
          position="Backend Dev" 
          socialMedia={["/linkedIn.svg", "/github.svg", "facebook.svg"]} />  

          <button className="text-white px-4 py-2 rounded-full text-xl tracking-wide" style={{backgroundColor:'#EC9521', height:'55px', width:'188px',fontFamily:'Manrope'}}>Contact Us</button>
      </div>

      {/*center column*/}
      <div className="flex flex-col items-center justify-between mt-24" style={{width:'322px', height:'830px' ,marginLeft:'30px',marginRight:'30px'}}>
        <OurTeamCard
          picture="/Me.jpeg"
          name="Muhammad Huzaifa"
          position="Frontend Dev"
          socialMedia={["/linkedIn.svg", "/github.svg", "facebook.svg"]}       
        />

        <OurTeamCard
          picture="/qadeer.jpeg"
          name="Muhammad Qadeer"
          position="Frontend Dev"
          socialMedia={["/linkedIn.svg", "/github.svg", "facebook.svg"]}

        />
      </div>

      {/*right column*/}
      <div className="flex flex-col justify-between" style={{width:'530px', height:'860px'}}>

        <div style={{width:'100%', height:'198px'}}>
          <p style={{color:'#0A273E', fontFamily:'Lexend', fontWeight:'bold', fontSize:'20px', lineHeight:'33px'}}>
          We are a dynamic team of professionals with diverse expertise 
          in development, design, and leadership. Our collective goal is 
          to drive innovation and deliver exceptional results in every
          project we undertake. Meet our team of dedicated and talented 
          individuals who are committed to achieving excellence and exceeding 
          client expectations.

          </p>
        </div>

        <OurTeamCard
          picture="/Alex.svg" 
          name="Hashir Ahmad" 
          position="Team Lead" 
          socialMedia={["/linkedIn.svg", "/github.svg", "facebook.svg"]} /> 

        <div style={{width:'100%', height:'198px'}}>
          <p style={{textAlign:'justify',color:'#0A273E', fontFamily:'Lexend', fontWeight:'bold', fontSize:'20px', lineHeight:'33px'}}>
          Our team thrives on collaboration and creativity, 
          ensuring that every solution we provide is tailored
          to meet the unique needs of our clients. With a focus 
          on continuous improvement and staying ahead of industry
          trends, we are passionate about delivering cutting-edge 
          solutions that make a significant impact.
          </p>
        </div>

      </div>
    </>
  )
}
export default OurTeam;
