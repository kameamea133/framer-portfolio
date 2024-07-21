import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>S.Monnier</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/kameamea133"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/stephane-monnier/"><FaLinkedin /></a>
            </div>

        </div>

        <p className='text-gray-400'>@2024 S.Monnier</p>
        
    </div>
  )
}

export default Footer