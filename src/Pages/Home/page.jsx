import React from 'react'
import SectionsTitle from '/src/Components/common/SectionsTitle'
import { useNavigate } from 'react-router'
import CTAButton from './components/CTAButton'
import Summaries from '../../features/Summaries/Summaries'
import DetailsCharts from '../../features/detailsCharts/DetailsCharts'
import LastProductTable from '../../features/LastProductTable/LastProductTable'



const Home = () => {
  const navigate=useNavigate()

  return (
 <>
 <div className='flex flex-col mx-5'>
  <SectionsTitle title="Dashboard" Buttons={<CTAButton onClick={() => navigate('/products')}  />}/>
<Summaries/>
  <div className="">
        <DetailsCharts />
         <LastProductTable />
        {/* <QuickOverview />  */}
      </div>
 </div>
 </>
  )
}

export default Home