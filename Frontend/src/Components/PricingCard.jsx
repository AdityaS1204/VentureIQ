import React from 'react'

export const PricingCard = ({ pricingDetail }) => {
  return (
    <div className="w-72 min-h-full m-2 p-3 flex flex-col rounded-xl bg-[#607f8a]">
      <div className="p-3 pb-9 mb-9 flex flex-col gap-4 justify-evenly rounded-xl bg-[#9aacfc] duration-500 hover:-translate-y-1 font-poppins">
        {/* small card */}
        <h3>{pricingDetail.name}</h3>
        <h3 className='text-sm'><span className='font-bold'>$</span><span className='text-4xl font-bold'>{pricingDetail.price}</span>/{pricingDetail.credits} credits</h3>
        <button className='bg-[#4F46E5] rounded-full hover:bg-blue-800 p-1'>{pricingDetail.buttonTitle}</button>
      </div>

      {/* features */}
      <div className='p-3 font-poppins text-sm'>
        <ul >
          <li className='mb-2 flex gap-2'><span><svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} fill='white' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg></span>{pricingDetail.feature1}</li>
          <li className='mb-2 flex gap-2'><span><svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} fill='white' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg></span>{pricingDetail.feature2}</li>
          <li className='mb-2 flex gap-2'><span><svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} fill='white' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg></span>{pricingDetail.feature3}</li>
          <li className='mb-2 flex gap-2'>{pricingDetail.feature4 ? <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} fill='white' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg> : <> </>}{pricingDetail.feature4}</li>
          <li className='mb-2 flex gap-2'>{pricingDetail.feature5 ? <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} fill='white' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg> : <> </>}{pricingDetail.feature5}</li>
          <li className='mb-2 flex gap-2'>{pricingDetail.feature6 ? <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} fill='white' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg> : <> </>}{pricingDetail.feature6}</li>
          <li className='mb-2 flex gap-2'>{pricingDetail.feature7 ? <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} fill='white' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg> : <> </>}{pricingDetail.feature7}</li>
          {pricingDetail.featureN ?
            <div className=' mt-5'>
             <div className="text-center">
              <hr />
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill='#2866DF' className='relative inset-28 -top-[9px]'
>
  <rect width="24" height="24" rx="12" fill="#2866DF" />
  <path
    d="M12 5v14M5 12h14"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

             </div>
              <ul className='mt-5'>
              <li className='mb-2 flex gap-2'>{pricingDetail.featureN ? <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} fill='#FBF191' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg> : <> </>}{pricingDetail.featureN}</li>
              <li className='mb-2 flex gap-2'>{pricingDetail.featureN1 ? <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} fill='#FBF191' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg> : <> </>}{pricingDetail.featureN1}</li>
              <li className='mb-2 flex gap-2'>{pricingDetail.featureN2 ? <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} fill='#FBF191' viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg> : <> </>}{pricingDetail.featureN2}</li>
                
              </ul>
            </div>
            :
            <div></div>}

        </ul>
      </div>
    </div>

  )
}
