import React from 'react'

const CommitteeDetail = ({MemberPost, MemberName, MemberPostCollege}) => {
  return (
    <div className='parentDivCommitte'>
      <div className ='committeeDetail'>
      </div>
      <div className="card committeCard">
        <div className='committeCardDetail'>
          <h3 className='cardTitle'>{MemberName}</h3>
          <h6 class="card-subtitle mb-3 text-muted">{MemberPostCollege}</h6>
        </div>
      </div>
    </div>
  )
}

export default CommitteeDetail