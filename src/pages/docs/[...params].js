import { useRouter } from "next/router"

// Concept called Catch All Routes

// Here only [...params]    => /docs routing not work
// while [[...params]]     => /docs routing work and this is called the optional routing.

function Doc() {
   
    const router = useRouter();
    const {params = []} = router.query 
    console.log(params);


    if(params.length === 2){
         return(
            <h1>
                Viewing Doc for feature { params[0] } and concept for { params[1] }
            </h1>
         )
    }else if(params.length === 1){
        return(
             <h1>
                 Viewing Doc for feature { params[0] }
             </h1>
        )
    }
    return <h1>Doc Home Page</h1>
}

export default Doc