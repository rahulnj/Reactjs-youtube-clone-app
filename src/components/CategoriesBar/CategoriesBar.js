import React, { useState } from 'react'
import './_CategoriesBar.scss'

const KeyWords = [
    'All',
    'React js',
    'Angular js',
    'Node js',
    'Redux',
    'Hooks',
    'Music',
    'Cricket',
    'Football',
    'Action'
]

const CategoriesBar = () => {
    const [ActiveKeywordElement, setActiveKeywordElement] = useState('All')

    const handleKeywordClick = (value) => {
        setActiveKeywordElement(value)
    }

    return (
        <div className='CategoriesBar'>
            {
                KeyWords.map((value, i) => (
                    <span
                        onClick={() => handleKeywordClick(value)}
                        key={i}
                        className={ActiveKeywordElement === value ? 'active' : ''}>
                        {value}
                    </span>
                ))
            }
        </div >
    )
}

export default CategoriesBar
