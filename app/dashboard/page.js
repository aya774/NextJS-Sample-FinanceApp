import React, { Suspense } from 'react'
import TransactionList from './components/transaction'

function Page() {
  return (
   <>

   <Suspense fallback ={<div>Loading...</div>}>
    <TransactionList/>
   </Suspense>
   </>
  )
}

export default Page