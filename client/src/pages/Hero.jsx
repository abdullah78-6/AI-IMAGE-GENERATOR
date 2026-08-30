import React from 'react'
const Hero = ({url}) => {
  return (
    <div className='font-semibold capitalize mt-5 p-7 '>
      <div className='flex justify-center items-center flex-col gap-7 text-center'>
        <div>
<h1 className=' bg-cyan-100/40 w-full rounded-full p-0.5 text-sm text-indigo-700'>
  ✨ AI-Powered Image Generation
</h1>

<p className='text-4xl mt-2 text-indigo-700  '>
  Turn Your Imagination Into Stunning Images
</p>
        </div>
        <div>
            <p className='w-190 text-xl text-slate-600 '>create unique, high-quality images in seconds with the power of AI. Just describe your idea, and let our AI bring it to life.</p>
        </div>
        <div className='mb-3'>
            <form>
                <div>
                <input  className="px-3 py-2.5 text-sm text-slate-800 w-full rounded-lg bg-neutral-300 border border-neutral-700 outline-none placeholder:text-slate-800 focus:border-[#D91656] focus:ring-2 focus:ring-[#D91656]/30 transition-colors" type="text"placeholder='Enter-Image-Prompt' required/>
                </div>
                <div className='flex justify-between items-center gap-15 mt-3'>
                    <div>
                        <button className='bg-green-400 p-2 rounded-lg hover:bg-green-600 transition ease-in-out duration-200 ' title='Generate Image' type='submit'>Generate Image</button>
                    </div>
                    <div>
                        <button className='bg-teal-500 p-2 rounded-lg hover:bg-teal-600 transition ease-in-out duration-200 ' title='Explore Gallery' type="button">Explore Gallery</button>
                    </div>
                </div>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Hero
