"use client"
import React from 'react'
import Image from 'next/image'
import Rectangle from "./images/Rectangle.png"
import tick from "./images/tick.png"
import mobile from "./images/mobile.png"
import vector from "./images/Vector.png"
import answer from "./images/answer.png"
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      <div className='relative'>
        <Image src={Rectangle} className='w-[100%] h-[100%] overflow-x-hidden -z-1' />

        {/* <h1 className='text-5xl absolute top-[5%] left-[5%]'>Helloe</h1> */}
        <div className='absolute text-center top-[5%] left-[10%]'>

          <div className='font-[600] text-[76px] leading-[114px] text-[#FFFFFF]'>Check your financial health</div>
          <div className='font-[275] text-[32px] text-[#FFFFFF] text-center leading-[41px]'>Use WealthoMeter to get a free report <br /> card for your finances-within minutes!</div>
          <div className='w-[265px] h-[68px] text-center mx-auto mt-8 bg-[#FB7306] flex items-center justify-center rounded-[32px]'>
            <Link href="pages/codes"><button className='font-[600] text-[32px] leading-[48px] text-[#FFFFFF]'>Get Started</button>
</Link>
          </div>

          <div className='flex mt-[50px] items-center justify-start '>

            <div className='flex flex-col gap-[25px] items-start'>
              <div className='flex justify-center items-center'>
                <div><Image src={tick} /></div>
                <div>
                  <p className='font-[600] text-[29px] leading-[43px] text-[#FFFFFF]'>Expected Retirement Age</p>
                  <div className='w-[100%] h-[2px] bg-[#FFFFFF]'></div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div><Image src={tick} /></div>
                <div>
                  <p className='font-[600] text-[29px] leading-[43px] text-[#FFFFFF]'>Identify Mistakes</p>
                  <div className='w-[100%] h-[2px] bg-[#FFFFFF]'></div>

                </div>
              </div>
            </div>


            <div>
              <Image src={mobile} />
            </div>


            <div className='flex flex-col gap-[25px] items-start'>
              <div className='flex justify-center items-center'>
                <div><Image src={tick} /></div>
                <div>
                  <p className='font-[600] text-[29px] leading-[43px] text-[#FFFFFF]'>Personalised Road Map</p>
                  <div className='w-[100%] h-[2px] bg-[#FFFFFF]'></div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div><Image src={tick} /></div>
                <div>
                  <p className='font-[600] text-[29px] leading-[43px] text-[#FFFFFF]'>Tips to Improve</p>
                  <div className='w-[100%] h-[2px] bg-[#FFFFFF]'></div>

                </div>
              </div>
            </div>
          </div>



          <div className='-left-[160px] absolute w-[100vw] '>
            <Image src={vector} className='w-[100%] absolute -top-[170px]' />

            <div>
              <p className='text-5xl top-[95px] left-[620px] absolute text-[#FFFFFF]'>How it Works?</p>
            </div>


            <div className='relative '>


              <div className='mx-auto w-[900px] '>
            
                <Image src={answer} className='' />
                
                <div className='top-0 pl-4 pr-4'>
                  
                 <div className='flex justify-between'>
                 <div className='font-[400] absolute top-[300px] text-[27px] leading-[40px] text-center text-[#FFFFFF]'>Answer few  <br/>questions</div>
                  <div className='font-[400] text-[27px] absolute top-[300px] left-[680px]  leading-[40px] text-center text-[#FFFFFF]'>Register using <br/>phone and OTP</div>
                  <div className='font-[400] text-[27px] absolute top-[300px] left-[1000px] leading-[40px] text-center text-[#FFFFFF]'>Get report and <br/> personal roadmap</div>
                 </div>

                </div>

              </div>
              <div className='flex justify-center items-center  absolute left-[650px] w-[265px] h-[68px] rounded-[32px] bg-[#FB7306]'>
                <Link href="/pages/codes" ><button className='font-[600] text-[32px] leading-[48px] text-[#FFFFFF]'>Get Started</button></Link>
              </div>
            </div>
          </div>


          {/* <div className='w-[265px] h-[68px] text-center mx-auto mt-8 bg-[#FB7306] flex items-center justify-center absolute rounded-[32px]'>
            <button className='font-[600] text-[32px] leading-[48px] text-[#FFFFFF]'>Get Started</button>
          </div> */}

        </div>



      </div>

    </div>
  )
}
