import bitmap from '../assets/Bitmap.png'
import office from '../assets/office.svg'
import urlIcon from '../assets/url.svg'
import pin from '../assets/pin.svg'
import twitter from '../assets/twitter.svg'
import {format,parseISO} from 'date-fns'


const Card = ({gitUser}) => {
  return (
    <div className='bg-white flex flex-col font-spaceMono dark:bg-gray-500 rounded dark:text-white'>
        <div className='flex md:flex-none m-5  gap-2'>
            <div className='w-[20%]'>            
                <img src={gitUser?.avatar_url} alt="user icon"  className='rounded-full'/>
            </div>

            <div className='flex flex-col gap-10  w-full'>
                <div className=' md:flex justify-between'>
                    <div>
                        <h1 className='text-[26px] font-bold  w-60'>{gitUser?.name === null ? gitUser?.login : gitUser?.name}</h1>
                        <h3 className='text-primaryBlue ' >@{gitUser?.login}</h3>
                    </div>
                <p className='mt-3'>
                    Joined {gitUser?.created_at != null && format(parseISO(gitUser?.created_at),'d MMM yyyy')}
                    </p>
            </div>
        </div>
        </div>
        <div className='md:ml-[20%] dark:text-white text-gray-100 flex flex-col gap-10 text-[15px]'>
            <p>{gitUser?.bio}</p>
            <table className='text-center bg-gray-50 w-[90%] self-center dark:bg-primaryBlack dark:text-white'>
                <thead>
                    <tr>
                        <th className='text-[13px] font-thin text-gray-200 dark:text-white'>Repos</th>
                        <th className='text-[13px] font-thin text-gray-200 dark:text-white'>Followers</th>
                        <th className='text-[13px] font-thin text-gray-200 dark:text-white'>Following</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-[22px] text-gray-300 font-bold dark:text-white'>{gitUser?.public_repos}</td>
                        <td className='text-[22px] text-gray-300 font-bold dark:text-white'>{gitUser?.followers}</td>
                        <td className='text-[22px] text-gray-300 font-bold dark:text-white'>{gitUser?.following}</td>
                    </tr>
                </tbody>
            
            
            </table>
            <div className='grid md:grid-cols-2 gap-5 p-10 rounded'>
                <div className='flex gap-3'>
                    <img src={pin} alt="location pin" />
                    <p>{gitUser?.location}</p>
                </div>
                <div className='flex gap-3 text-gray-100'>
                    <img src={twitter} alt="twitter icon" />
                    <p>{gitUser?.twitter_username}</p>
                </div>
                <div className='flex gap-3'>
                    <img src={urlIcon} alt="link icon" />
                    <p>{gitUser?.blog}</p>
                </div>
                <div className='flex gap-3'>
                    <img src={office} alt="office icon" />
                    @github
                </div>
            </div>
        </div>
            
        
    </div>
  )
}

export default Card