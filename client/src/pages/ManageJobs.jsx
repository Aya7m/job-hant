import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ManageJobs = () => {
    const navigate=useNavigate()

  return (
    <div className='container mx-auto p-6'>
        <div className='overflow-x-auto border border-gray-200 text-center'>
            <table className='text-gray-600 min-w-full'>
                <thead >
                    <th className='py-3 px-4 border-b max-sm:hidden'>#</th>
                    <th className='py-3 px-4 border-b'>Job Title</th>
                    <th className='py-3 px-4 border-b max-sm:hidden'>Date</th>
                    <th className='py-3 px-4 border-b max-sm:hidden'>Location</th>
                    <th className='py-3 px-4 border-b'>Applications</th>
                    <th className='py-3 px-4 border-b'>Vailable</th>
                </thead>
                <tbody>
                    {manageJobsData.map((job,index)=>(
                        <tr key={index}>
                            <td className='py-3 px-4 border-b max-sm:hidden'>
                                {index+1}
                            </td>
                            <td className='py-3 px-4 border-b'>
                                {job.title}
                            </td>

                             <td className='py-3 px-4 border-b max-sm:hidden'>
                                {moment(job.date).format('ll')}
                            </td>
                             <td className='py-3 px-4 border-b max-sm:hidden'>
                                {job.location}
                            </td>

                             <td className='py-3 px-4 border-b'>
                                {job.applicants}
                            </td>
                            <td className='py-3 px-4 border-b'>
                                <input type='checkbox'  className='ml-4 scale-105'/>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className='flex items-center justify-end my-5'>
            <button onClick={()=>navigate('/dashboard/add-job')} className='bg-blue-500 text-white px-4 py-1.5 rounded-lg cursor-pointer'>Add Job</button>
        </div>
    </div>
  )
}

export default ManageJobs