import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
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
    'Action',
    'Songs',
    'Baseball',
    'Books',
    'Lifestyle'
]

const CategoriesBar = () => {
    const [ActiveKeywordElement, setActiveKeywordElement] = useState('All')

    const dispatch = useDispatch()

    const handleKeywordClick = (value) => {
        setActiveKeywordElement(value)
        if (value === 'All') {
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(value))
        }
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
