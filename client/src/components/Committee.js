import React from 'react';
import CommitteeDetail from './CommitteeDetail';
import CommitteeTitle from './CommitteeTitle';
import Title from './Title';
import CommitteeGrid from './CommitteeGrid';
function Committee() {

  return (
    <div>
      
      <Title titleName= 'Conference Committee Members'/>
      <CommitteeTitle MemberPost={'Chief Patron'}/>
      <CommitteeDetail MemberName={'Prof. Bhim Singh'} MemberPostCollege={'IEEE Fellow, Chairman, BoG, SVNIT Surat '}/>   
      <CommitteeTitle MemberPost={'Patron'}/>
      <CommitteeDetail MemberName={'Prof. Anupam Shukla,'} MemberPostCollege={'Director, SVNIT Surat '}/>
      <CommitteeTitle MemberPost={'Honorary Chairs'}/>
      <div className='committeeGrid'>
      <CommitteeDetail MemberName={'Dr. Brij N. Singh'} MemberPostCollege={'IEEE Fellow, John Deere Fellow, Electrification R&D Manager in John Deere USA '}/>
      <CommitteeDetail MemberName={'Prof. Victor Veliadis'} MemberPostCollege={'CTO of PowerAmerica and Professor at NC State University '}/>
      </div>
      <CommitteeTitle MemberPost={'General Chairs'}/>
      <CommitteeGrid FirstName={'Dr. Mahmadasraf A. Mulla'} FirstPostCollege={ 'DoEE, SVNIT Surat'}
      SecondName={'Dr. Aeidapu Mahesh'} SecondPostCollege={'DoEE, SVNIT Surat '}
      ThirdName={'Prof. Chirag N. Paunwala'} ThirdPostCollege={' Chair - IEEE Gujarat Section '}/>
      <CommitteeTitle MemberPost = {'Organizing Chairs'}/>
      <div className='row'>
        <div className='col'>
          <CommitteeDetail MemberName={'Prof. Pranav B. Darji'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div className='col'>
          <CommitteeDetail MemberName={'Dr. Rajashekhar Reddy'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div className='col'>
          <CommitteeDetail MemberName={'Dr. K. V. Praveen Kumar'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div className='col'>
          <CommitteeDetail MemberName={'Dr. Suresh Lakhimsetty'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div className='col'>
          <CommitteeDetail MemberName={'Dr. Sanjay Tolani'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div className='col'>
          <CommitteeDetail MemberName={'Dr. Priyesh Chauhan'} MemberPostCollege={'IITRAM, Ahmedabad'}/>
        </div>
      </div>

      <CommitteeTitle MemberPost={'Conference Secretaries'}/>
      <div className='row'>
        <div className='col'>
          <CommitteeDetail MemberName={'Dr. Jammala Venkataramanaiah'} MemberPostCollege={' DoEE, SVNIT '}/>
        </div>
        <div className='col'>
          <CommitteeDetail MemberName={'Dr. Basant K. Sethi'} MemberPostCollege={' DoEE, SVNIT '}/>
        </div>
        <div className='col'>
          <CommitteeDetail MemberName={'Dr. Gangireddy Sushnigdha'} MemberPostCollege={' DoEE, SVNIT '}/>
        </div>
        <div className='col'>
          <CommitteeDetail MemberName={'Dr. Akanksha Shukla,'} MemberPostCollege={' DoEE, SVNIT '}/>
        </div>
      </div>

      <CommitteeTitle MemberPost={'Finance Chairs'}/>
      <div className='row'>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Mahmadasraf A. Mulla'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. A. K. Panchal'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Basant K. Sethi'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Akanksha Shukla'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
      </div>

      <CommitteeTitle MemberPost={'Technical Program committee Chairs'}/>
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Pranav B. Darji'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Sabha Raj Arya,'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Mahmadasraf A. Mulla'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Aeidapu Mahesh'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Anandita Chawdhury'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Brij N. Singh'} MemberPostCollege={'John Deere Fellow, Electrification R&D Manager in John Deere USA '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Victor Veliadis'} MemberPostCollege={' IEEE Fellow, CTO of PowerAmerica and Professor at NC State University '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Surender Reddy Salkuti'} MemberPostCollege={'Department of Railroad and Electrical Engineering, Woosong University, Republic of Korea.'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Amit Ved'} MemberPostCollege={'Marwadi University'}/>
        </div>
      </div>

      <CommitteeTitle MemberPost={'Publications Chairs'}/>
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Sabha Raj Arya'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Rakesh Maurya'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Rajashekhar Reddy'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Jammala Venkataramanaiah'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. K. V. Praveen Kumar'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
      </div>
      
      <CommitteeTitle MemberPost={'Sponsorship Chairs'}/>
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Rajashekhar Reddy'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Varsha A Shah'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Chandini P. Gor'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Akanksha Shukla'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Basant K. Sethi'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
      </div>
      <CommitteeTitle MemberPost={'WIE Chairs'}/>
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Varsha A Shah'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Gangireddy Sushnigdha'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Akanksha Shukla '} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
      </div>
      <CommitteeTitle MemberPost={'Hospitality Chairs'}/>
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Rakesh Maurya'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. K. V. Praveen Kumar'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Jammala Venkataramanaiah '} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
      </div>

      <CommitteeTitle MemberPost={'Tutorial and Workshop Chairs '}/>
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Sanjay Tolani'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Suresh Lakhimsetty'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Akanksha Shukla'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Basant K. Sethi'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
      </div>

      <CommitteeTitle MemberPost={'Student Activity & Awards Chairs '} />
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Aeidapu Mahesh'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Suresh Lakhimsetty'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Gangireddy Sushnigdha'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Basant K. Sethi'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
      </div>

      <CommitteeTitle MemberPost={'Publicity Chairs'}/>
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Gangireddy Sushnigdha'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. K. V. Praveen Kumar'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Sunanda Sinha'} MemberPostCollege={'CEE, MNIT Jaipur'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Mahisha Shah'} MemberPostCollege={'Nirma University'}/>
        </div>
      </div>

      <CommitteeTitle MemberPost={'Special Session Chairs '}/>
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Aeidapu Mahesh'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Suresh Lakhimsetty,'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Tejavathu Ramesh'} MemberPostCollege={'DoEE, NIT Andhra Pradesh'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Giribabu Dyanamina'} MemberPostCollege={'DoEE, MANIT Bhopal'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Naveen Yalla,'} MemberPostCollege={'DoEE, IIT BHU Varanasi'}/>
        </div>
      </div>
      <CommitteeTitle MemberPost={'Steering Committee Chair '} />
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Chirag N. Paunwala'} MemberPostCollege={'Chair - IEEE Gujarat Section  '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Mahmadasraf A. Mulla'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Aeidapu Mahesh'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Priyesh Chauhan'} MemberPostCollege={'DoEE,  DoEE, IITRAM, Ahmedabad'}/>
        </div>
      </div>
      <CommitteeTitle MemberPost={'Institute Advisory Committee Chairs '} />
      <div className='row' >
      <div  className='col'>
          <CommitteeDetail MemberName={'Prof. H R Jariwala,'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Pranav Darji'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. R Chudamani'} MemberPostCollege={'DoEE, SVNIT Surat'}/>
        </div>
      </div>

      <CommitteeTitle MemberPost={'National Advisory Committee Members '}/>
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Bhim Singh'} MemberPostCollege={'IIT Delhi'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. K. Siva Kumar,'} MemberPostCollege={'IIT Hyderabad'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Raghavan K'} MemberPostCollege={'IIT Gandhinagar'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Deepak Ronanki'} MemberPostCollege={'IIT Madras '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Pramod Agarwal'} MemberPostCollege={'IIT Roorkee'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. B. Murali Mohan'} MemberPostCollege={'IIT Kharagpur'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Narsa Reddy Tummuru,'} MemberPostCollege={'IIT Bhubaneshwar'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Bharat Singh Rajpurohit'} MemberPostCollege={'IIT Jodhpur'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Pradhyuman Chaturvedi'} MemberPostCollege={'VNIT Nagpur'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Ashwani Kumar'} MemberPostCollege={'NIT Kurukshetra'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. V.T. Somasekhar'} MemberPostCollege={'DoEE, NIT Warangal '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. R B Jadeja'} MemberPostCollege={'Marwadi University'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Gopal Gajjar'} MemberPostCollege={'Hitachi Energy '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Vijay K. Shah'} MemberPostCollege={'ABB, Vadodra'}/>
        </div>
      </div>

      <CommitteeTitle MemberPost={'International Advisory Committee Members '} />
      <div className='row'>
      <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Brij N. Singh,'} MemberPostCollege={'IEEE Fellow, John Deere Fellow, Electrification R&D Manager in John Deere USA '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Victor Veliadis'} MemberPostCollege={'IEEE Fellow, CTO of PowerAmerica and Professor at NC State University '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Akshay Rathore'} MemberPostCollege={'Singapore Institute of Technology '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Sanjib Kumar Panda'} MemberPostCollege={' Department of Electrical Engineering, NUS'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Jiaxing Lei'} MemberPostCollege={'School of Electrical Engineering, Southeast University, China. '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Prof. Akhtar Kalam'} MemberPostCollege={'Victoria University, Melbourne, Victoria 8001  Australia '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Anurag Sharma'} MemberPostCollege={'New Castle University, Singapore'}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Dr. Dhivya Sampath Kumar'} MemberPostCollege={' Singapore Institute of Technology, Singapore '}/>
        </div>
        <div  className='col'>
          <CommitteeDetail MemberName={'Yam P. Siwakoti'} MemberPostCollege={'Associate Professor at the University of Technology Sydney Macquarie Park, New South Wales, Australia'}/>

        </div>
      </div>

  </div>     
  )
}

export default Committee; 