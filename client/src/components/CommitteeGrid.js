import React from 'react';
import CommitteeDetail from './CommitteeDetail';

const CommitteeGrid = ({FirstName,FirstPostCollege, SecondName, SecondPostCollege, ThirdName, ThirdPostCollege}) => {
  return (
    <div>
      <div className='row'>
        <div className='col sm'>
            <CommitteeDetail MemberName={FirstName} MemberPostCollege={FirstPostCollege}/>
        </div>
        <div className='col sm'>
            <CommitteeDetail MemberName={SecondName} MemberPostCollege={SecondPostCollege}/>
        </div>
        <div className='col sm'>
            <CommitteeDetail MemberName={ThirdName} MemberPostCollege={ThirdPostCollege}/>
        </div>
      </div>
    </div>
  )
}

export default CommitteeGrid