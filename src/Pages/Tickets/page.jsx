import React from 'react'
import ComingSoon from "../../Components/common/ComigSoon";
import useTitle from '../../hooks/useTitle';

const Tickets = () => {
  useTitle("Tickets");
  return (
    <ComingSoon title="Tickets Management" />
  )
}

export default Tickets