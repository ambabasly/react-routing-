import React, { useState, useEffect } from 'react'
import { data } from '../../data'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()

  const [searchResult, setSearchResult] = useState(data)
  const [showActive, setShowActive] = useState(false)

  const lowerCaseAndTrim = (value) => {
    return value.toString().toLowerCase().trim()
  }

  const onSearch = (value) => {
    setShowActive(false)
    if (data.length > 0 && value.trim().length > 0) {
      let input = lowerCaseAndTrim(value)
      let results = data.filter((item) => {
        return lowerCaseAndTrim(item.pageTitle).includes(input)
      })
      setSearchResult(results)
    } else {
      setSearchResult(data)
    }

  }

  useEffect(() => {
    if (showActive) {
      const getDetails = data.filter((item) => item.isActive)
      setSearchResult(getDetails)
    } else {
      setSearchResult(data)
    }
  }, [showActive])


  return (
    <div className='homepage'>
      <div className="fiilter-holder">
        <input type="text" className='search' placeholder='Search by page title' onChange={((e) => {
          onSearch(e.target.value)
        })} />

        <span className='filter-active'>
          Show only Active <input type="checkbox" onChange={((e) => {
            setShowActive(e.target.checked)
          })} checked={showActive} />
        </span>
      </div>

      <div className="item-holder">
        {
          searchResult.map((item) => (
            <div key={item.id} className="item" onClick={() => {
              navigate(`/data/${item.id}`)
            }}>
              <span><b>Page Type: </b> {item.pageType}</span>

              <span><b>Page Title: </b> {item.pageTitle}</span>

              <span><b>Is Active: </b> {item.isActive ? 'TRUE' : 'FALSE'}</span>

              <span><b>Content: </b> {item.content}</span>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Homepage