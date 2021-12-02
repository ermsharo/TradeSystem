import {useState, useEffect} from 'react';


export default function useFetch(url, opts) {

    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

        setLoading(true)
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