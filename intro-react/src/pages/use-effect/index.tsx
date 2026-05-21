/*
    useEffect   : Untuk meng-handle side effect process. Salah 1 contohnya sering digunakan untuk proses pengambilan data ke API (fetching data). Sering dikenal dengan istilah life cycle method.
*/

import { useEffect, useState } from "react"

export default function UseEffectPage(){
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log('Triggered-01')
    }, []);

    /*
        useEffect(() => {
        
        }, [state, props])
    */

        useEffect(() => {
            console.log('Triggered-02')
        }, [counter])

    /*
        useEffect(() => {
            return () => {
            
            }
        }, [])
    */

    return(
        <>
            {console.log('Return Element')}
            <h1>Use Effect</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter+1)}>Change Counter</button>
        </>
    )
}