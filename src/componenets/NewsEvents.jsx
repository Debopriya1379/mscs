import React from 'react'
import './styles/NewsEvents.css'
import { NewsRows } from './NewsRows'

export const NewsEvents = () => {
  return (
    <div className='NewsEvents-component'>
      <div className="News_head">
        <h2>Latest news and announcements</h2>
      </div>
      <div className="News_rows">
        <ul>
          <li><NewsRows/></li>
          <li><NewsRows/></li>
          <li><NewsRows/></li>
          <li><NewsRows/></li>
        </ul>
      </div>
    </div>
  )
}
