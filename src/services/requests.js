import {useState, useEffect} from 'react';


export default async function useFetch(url, opts) {

    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

       fetch(url, opts)
            .then((res) => {
            setResponse(res.data)
            setLoading(false)
        })
            .catch(() => {
                setHasError(true)
                setLoading(false)
            })

    return [ response, loading, hasError ]
}