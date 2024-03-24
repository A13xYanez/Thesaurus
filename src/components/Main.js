import React from 'react'
import { useState, useEffect } from 'react'

export default function Main(props) {
    const [synonym, setSynonym] = useState([])
    let url = `https://api.datamuse.com/words?ml=${props.searchTerm}`

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setSynonym(data))
        .catch((err) => console.log(err))
    }, [url])

    return (
        <main className='main'>
            <div className='main--synonyms'>
                {synonym.map((item) => (
                    <h1>{item.word.charAt(0).toUpperCase() + item.word.slice(1)}</h1>
                ))}
            </div>
        </main>
    )
}
