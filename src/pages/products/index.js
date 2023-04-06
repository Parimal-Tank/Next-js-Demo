import Link from "next/link";
import React from "react";


// Here the replace means user don't back the previous page

const index = ({productid = 100}) => {
  return (
    <div>
      <h1>
        <Link href='/products/1'>Product1</Link>
      </h1>
      <h1>
        <Link href='/products/2'>Product2</Link>
      </h1>
      <h1>
        <Link href='/products/3' replace >Product3</Link>
      </h1>
      <h1>
        <Link href={`/products/${productid}`}>Product{productid}</Link>
      </h1>
    </div>
  );
};

export default index;
