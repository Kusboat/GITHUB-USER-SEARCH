import { useState } from 'react'
import search from '../assets/search.svg'

const SearchBar = ({getUser,error}) => {

  const [query,setQuery] = useState('')

  const submitHandler = e =>{
    e.preventDefault();
    getUser(query);
    setQuery('');
  }

  return (
    <div>
        <div>
            <form onSubmit={submitHandler} className='p-2 dark:bg-gray-500 flex justify-between bg-white items-center shadow-lg rounded'>
                <div className='flex gap-2 ml-2 '>
                    <img src={search} alt="search icon" className='w-[24px] h-[24px]'/>
                    <input
                    required
                    value={query}
                    onChange={e =>setQuery(e.target.value)}
                    className='border-0 outline-none placeholder:text-gray-200 dark:bg-gray-500' type="text" placeholder='Search Github username...'/>
                </div>
                {error === '' ? '' : error}
                <button className='px-5 py-2 flex justify-center items-center text-white bg-primaryBlue rounded hover:bg-[#60ABFF]' type='submit'>Search</button>
            </form>
            
        </div>
        
    </div>
  )
}

export default SearchBar