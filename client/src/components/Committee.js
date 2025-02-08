import React from 'react';
import CommitteeDetail from './CommitteeDetail';
import Home from './Home';
import Title from './Title';

function Committee() {

  return (
    <div>
      <Home/>
      <Title titleName= 'Conference Committee Members'/>
      <CommitteeDetail MemberPost={'Cheif Patron'} MemberName={'DR B.K Sethi'} MemberPostCollege={'Assistant Proffesor, SVNIT, Surat'}/>
      <CommitteeDetail MemberPost={'Cheif Patron'} MemberName={'DR B.K Sethi'} MemberPostCollege={'Assistant Proffesor, SVNIT, Surat'}/>
      <CommitteeDetail MemberPost={'Cheif Patron'} MemberName={'DR B.K Sethi'} MemberPostCollege={'Assistant Proffesor, SVNIT, Surat'}/>
      <CommitteeDetail MemberPost={'Cheif Patron'} MemberName={'DR B.K Sethi'} MemberPostCollege={'Assistant Proffesor, SVNIT, Surat'}/>
    </div>
  )
}

export default Committee; 