import { useContext } from 'react'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { ThemeContext } from './ThemeProvider'

const Header = () => {
    const {theme,toggler} = useContext(ThemeContext)

  return (
    <div className='w-full flex justify-between items-center'>
        <h1 className='text-primaryBlack font-bold font-spaceMono text-[26px] dark:text-white'>devfinder</h1>
        <div onClick={toggler} className='flex items-center justify-center gap-2 font-bold'>
            <h4 className='font-spaceMono text-gray-100 text-[13px] dark:text-white'>{theme==='light'?'DARK':'LIGHT' }</h4>
            <span>
                {theme==='light'?<img src={moon} alt='moon icon'/>:<img src={sun} alt='sun icon'/>}
            </span>
        </div>
        
    </div>
  )
}

export default Header