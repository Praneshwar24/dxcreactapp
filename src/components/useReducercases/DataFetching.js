import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function DataFetching() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(
                    response => {
                        setLoading(false)
                        setPost(response.data)
                        setError('')
                    }
                )
                .catch(error => { })
        }, []
    )
    return (
        <div>
            {loading ? 'Loading data' : post.title}
            {error ? error : null}
        </div>
    )
}
