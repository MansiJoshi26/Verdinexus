import React from 'react'
import './Testinomial.css'
const Testinomial = () => {
    return (
        <>
            <div style={{backgroundImage:'url("/Testibg.jpeg")', backgroundPosition:'center', backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='w-[100%]  text-white flex justify-center py-20'>
            <div className="wrapper w-[70%] h-screen">
                <div className="top flex justify-between items-center h-28  ">
                    <h1 className='md:text-3xl text-xl md:p-3 w-[80%] md:w-[50%]'>We Provide Best Quality</h1>
                    <button className='py-2 h-10 bg-orange-400 px-8 hover:bg-white hover:text-orange-400 transition-colors ease-in'><a href="https://riyakaushal321.wixstudio.com/my-site-10" target='blank'>View</a></button>
                </div>
                <div className="down flex justify-between my-6 items-center space-x-5">
                  <div className="divbox1 bg-red-50 w-[35%]">
                    <a href="https://riyakaushal321.wixstudio.com/my-site-10" target='blank'>
                    <img src="https://static.wixstatic.com/media/0bb83114d47e4ca0a9fa5a9ea6a16530.jpg/v1/fill/w_414,h_527,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mountain%20Landscape.jpg" alt="" />
                    </a>
                    <h1 className='absolute left-2 text-xs md:text-3xl top-[80%]'>Bali, Indonasia <br /><span className='text-orange-500'>$300</span></h1>
                    </div>
                  <div className="divbox1 bg-red-50 w-[35%]"><a href="https://riyakaushal321.wixstudio.com/my-site-10" target='blank'><img src="https://static.wixstatic.com/media/11062b_2acbd6eaea3d43b98b40d28b8838464e~mv2.jpg/v1/fill/w_414,h_527,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mountain.jpg" alt="" /></a>
                    <h1 className='absolute left-2 text-xs md:text-3xl top-[80%]'>Bali, Indonasia <br /><span className='text-orange-500'>$300</span></h1>
                  
                  </div>
                  <div className="divbox1 bg-red-50 w-[35%]"><a href="https://riyakaushal321.wixstudio.com/my-site-10" target='blank'><img src="https://static.wixstatic.com/media/11062b_4c10b593035143bda767c755c09bb406~mv2.jpg/v1/fill/w_414,h_527,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mountain.jpg" alt="" /></a>
                    <h1 className='absolute left-2 md:text-3xl text-xs top-[80%]'>Bali, Indonasia <br /><span className='text-orange-500'>$300</span></h1>
                  
                  </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Testinomial