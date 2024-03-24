import React from 'react'
import { useState } from 'react'

export default function Header(props) {
    const [data, setData] = useState("")

    function handleChange(event) {
        setData(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.onSubmit(data)
    }
    

    return (
        <header className='header'>
            <div className='header--container'>
                <h1>Thesaurus</h1>
                <form className='header--form' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Search' onChange={handleChange} value={data.searchTerm} />
                    <button>🔍</button>
                </form>
                <h3>Synonyms For The Word: {data.charAt(0).toUpperCase() + data.slice(1)}</h3>
            </div>
        </header>
    )
}