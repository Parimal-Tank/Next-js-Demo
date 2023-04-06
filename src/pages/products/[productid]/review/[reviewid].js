import { useRouter } from 'next/router';
import React from 'react'

// Here This is Called as Dynamic Routing

const Review = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const { reviewid , productid } = router.query;

    return <h1> Review {reviewid} for product {productid} </h1>
}

export default Review