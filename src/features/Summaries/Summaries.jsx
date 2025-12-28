import React from 'react'
import SummaryCard from './components/SummaryCard'
import {generateSummaries} from '../../utils/home'

const Summaries = () => {
  const summaries = generateSummaries({
    productsLength: 20,
    ticketsLength: 80,
    adminsLength: 3,
    usersLength: 200,
  });

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 '>
{summaries.map((summary)=>(
  <SummaryCard key={summary.id}{...summary}/>
))}
    </div>
  )
}

export default Summaries