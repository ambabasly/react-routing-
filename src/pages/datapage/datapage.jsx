import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { data } from '../../data'

const Datapage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [details, setDetails] = useState([])

  useEffect(() => {
    if (id !== undefined && id.length > 0) {
      const getDetails = data.filter((item) => item.id.toString() === id)
      if (getDetails.length) {
        setDetails(getDetails)
      }

    } else {
      navigate('/')
    }
  }, [id, navigate])


  return (
    <div className='datapage'>
      {
        details.length > 0 &&
        details.map((item) => (
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
  )
}

export default Datapage