import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const HonoraryChairs = ["Dr. Brij N. Singh, IEEE Fellow, John Deere Fellow,Electrification R&D Manager in John Deere USA ",
  "Prof. Victor Veliadis, IEEE Fellow, CTO of PowerAmerica and Professor at NC State University "
];

const generalChairs = ["Dr. Mahmadasraf A. Mulla, DoEE, SVNIT Surat", "Dr. Aeidapu Mahesh, DoEE, SVNIT Surat ", 
  "Prof. Chirag N. Paunwala, Chair - IEEE Gujarat Section"
];

const organizingChairs = ["Prof. Pranav B. Darji, DoEE, SVNIT Surat ", "Dr. Priyesh Chauhan, IITRAM, Ahmedabad ", "Dr. Rajashekhar Reddy, DoEE, SVNIT Surat "
  , "Dr. Sanjay Tolani, DoEE, SVNIT Surat", "Dr. K. V. Praveen Kumar, DoEE, SVNIT Surat", "Dr. Suresh Lakhimsetty, DoEE, SVNIT Surat"
];

const ConferenceSecretaries = ["Dr. Jammala Venkataramanaiah, DoEE, SVNIT ", "Dr. Basant K. Sethi, DoEE, SVNIT", 
  "Dr. Gangireddy Sushnigdha, DoEE, SVNIT" , "Dr. Akanksha Shukla, DoEE, SVNIT "
];

const financeChairs = ["Dr. Mahmadasraf A. Mulla, DoEE, SVNIT Surat ", "Prof. A. K. Panchal, DoEE, SVNIT",
  " Dr. Basant K. Sethi, DoEE, SVNIT", "Dr. Akanksha Shukla, DoEE, SVNIT"
];

const technicalProgram = ["Prof. Pranav B. Darji, DoEE, SVNIT Surat", "Dr. Mahmadasraf A. Mulla, DoEE, SVNIT Surat ",
  "Dr. Aeidapu Mahesh, DoEE, SVNIT Surat", "Prof. Sabha Raj Arya, DoEE, SVNIT Surat", "Prof. Anandita Chawdhury, DoEE, SVNIT Surat",
  "Dr. Brij N. Singh, IEEE Fellow, John Deere Fellow Electrification R&D Manager in John Deere USA", "Prof. Victor Veliadis, IEEE Fellow, CTO of PowerAmerica and Professor at NC State University"
  , "Dr. Surender Reddy Salkuti, Department of Railroad and Electrical Engineering, Woosong University, Republic of Korea.",
  "Dr. Amit Ved, Marwadi University"
];

const publicationChairs = ["Prof. Sabha Raj Arya, DoEE, SVNIT Surat", "Dr. Rakesh Maurya, DoEE, SVNIT ", "Dr. Rajashekhar Reddy, DoEE, SVNIT Surat", 
  "Dr. Jammala Venkataramanaiah, DoEE, SVNIT", "Dr. K. V. Praveen Kumar, DoEE, SVNIT Surat"
];

const sponsorshipChairs = ["Dr. Rajashekhar Reddy, DoEE, SVNIT Surat ", "Prof. Varsha A Shah, DoEE, SVNIT Surat", "Dr. Chandini P. Gor, DoEE, SVNIT Surat",
  "Dr. Akanksha Shukla, DoEE, SVNIT Surat", "Dr. Basant K. Sethi, DoEE, SVNIT"
];

const WIEChairs = ["Prof. Varsha A Shah, DoEE, SVNIT", "Dr. Gangireddy Sushnigdha, DoEE, SVNIT", "Dr. Akanksha Shukla, DoEE, SVNIT"];

const HospitalityChairs = ["Dr. Rakesh Maurya, DoEE, SVNIT", "Dr. K. V. Praveen Kumar, DoEE, SVNIT Surat", "Dr. Jammala Venkataramanaiah, DoEE, SVNIT"];

const tutorialAndWorshopChairs = ["Dr. Sanjay Tolani, DoEE, SVNIT Surat", "Dr. Suresh Lakhimsetty, DoEE, SVNIT, Surat", "Dr. Akanksha Shukla, DoEE, SVNIT, Surat",
  "Dr. Basant K. Sethi, DoEE, SVNIT"
];

const studentActivityAndAwardChairs = ["Dr. Aeidapu Mahesh, DoEE, SVNIT Surat", "Dr. Suresh Lakhimsetty, DoEE, SVNIT Surat", 
  "Dr. Gangireddy Sushnigdha, DoEE, SVNIT", "Dr. Basant K. Sethi, DoEE, SVNIT"
];

const publicityChairs = ["Dr. Gangireddy Sushnigdha, DoEE, SVNIT", "Dr. K. V. Praveen Kumar, DoEE, SVNIT Surat", "Dr. Sunanda Sinha, CEE, MNIT Jaipur",
  "Prof. Mahisha Shah, Nirma University "
];

const specialSessionChairs = ["Dr. Aeidapu Mahesh, DoEE, SVNIT Surat", "Dr. Suresh Lakhimsetty, DoEE, SVNIT Surat",
  "Dr. Tejavathu Ramesh, DoEE, NIT Andhra Pradesh", "Dr. Giribabu Dyanamina, DoEE, MANIT Bhopal", "Dr. Naveen Yalla, DoEE, IIT BHU"
];

const steeringCommitteeChairs = ["Prof. Chirag N. Paunwala, Chair - IEEE Gujarat Section ", "Dr. Mahmadasraf A. Mulla, DoEE, SVNIT Surat",
  "Dr. Aeidapu Mahesh, DoEE, SVNIT Surat", "Dr. Priyesh Chauhan, DoEE, IITRAM, Ahmedabad"
];

const instituteAdvisory = ["Prof. H R Jariwala, DoEE, SVNIT Surat ", "Prof. Pranav Darji, DoEE, SVNIT Surat", "Prof. R Chudamani, DoEE, SVNIT Surat"];

const nationalAdvisory = ["Prof. Bhim Singh, IIT Delhi", "Prof. K. Siva Kumar, IIT Hyderabad", "Prof. Raghavan K, IIT Gandhinagar", 
  "Dr. Deepak Ronanki, IIT Madras", "Prof. Pramod Agarwal, IIT Roorkee", "Prof. B. Murali Mohan, IIT Kharagpur", "Prof. Narsa Reddy Tummuru, IIT Bhubaneshwar",
  "Prof. Bharat Singh Rajpurohit, IIT Jodhpur", "Prof. Pradhyuman Chaturvedi, VNIT Nagpur", "Prof. Ashwani Kumar, NIT Kurukshetra",
"Prof. V.T. Somasekhar, DoEE, NIT Warangal", "Prof. R B Jadeja, Marwadi University", "Dr. Gopal Gajjar, Hitachi Energy",
"Dr. Vijay K. Shah, ABB, Vadodara"];

const internationalAdvisory = ["Dr. Brij N. Singh, IEEE Fellow, John Deere Fellow,Electrification R&D Manager in John Deere USA ",
  "Prof. Victor Veliadis, IEEE Fellow, CTO of PowerAmerica and Professor at NC State University ", "Prof. Akshay Rathore, Singapore Institute of Technology ",
  "Prof. Sanjib Kumar Panda, Department of Electrical Engineering, NUS ", "Jiaxing Lei, School of Electrical Engineering, Southeast University, China. ",
  "Prof. Akhtar Kalam, Victoria University, Melbourne, Victoria 8001 Autralia", "Dr. Anurag Sharma, Newcastle University, Singapore",
  "Dr. Dhivya Sampath Kumar, Singapore Institute of Technology, Singapore ", "Yam P. Siwakoti, Associate Professor at the University of Technology Sydney Macquarie Park, New South Wales, Australia "
];
 function OrganizingCommitteePage() {
  return (
    <main className="flex-1">
    <Navbar />
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex items-center mb-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          CONFERENCE ORGANIZING COMMITTEE
          </h1>
        </div>
        <div className="bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black p-6 rounded-lg shadow-md mb-8">
          <div className="text-gray-500 dark:text-gray-400 mb-8">
          <Grid container spacing={12}>
            <Grid item xs= {12} style={{textAlign: "center"}}>
              <div style={{display: "flex", flexDirection: "column"}}>
              <b style={{fontSize : "1.5rem"}}>Cheif Patrons</b>
              <p>Prof. Bhim Singh, IEEE Fellow, Chairman, BoG, SVNIT Surat </p>
              </div>  
            </Grid>
          </Grid>
        <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto",
              display: "flex", flexDirection: "column" // Allows height to expand
            }}
          >
           <b style={{fontSize : "1.5rem"}}>Patron</b> 
           <p>Prof. Anupam Shukla, Director, SVNIT Surat </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
            <b style = {{fontSize: "1.5rem"}}>Honorary Chairs</b>
            {HonoraryChairs.map(i=> {
              return(
                <p>{i}</p>
              );
            })}
          </div>
        </Grid>
      
    </Grid>
    <Grid container spacing={2} justifyContent="center">
      
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
            <b style={{fontSize:"1.5rem"}}>General Chairs</b>
            {generalChairs.map(i=> {
              return (
                <p>{i}</p>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
            <b style={{fontSize: "1.5rem"}}>Organizing Chairs</b>
              {organizingChairs.map(i=> {
                return(
                  <p>{i}</p>
                );
              })}
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto",
              display: "flex", flexDirection: "column" // Allows height to expand
            }}
          >
           <b style={{fontSize : "1.5rem"}}>Conference Secretaries</b> 
           {ConferenceSecretaries.map(i=> {
            return (
              <p>{i}</p>
            )
           })}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto",
              display: "flex", flexDirection: "column" // Allows height to expand
            }}
          >
           <b style={{fontSize : "1.5rem"}}>Finance Chairs</b> 
           {financeChairs.map(i=> {
            return (
              <p>{i}</p>
            )
           })}
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto",
              display: "flex", flexDirection: "column" // Allows height to expand
            }}
          >
           <b style={{fontSize : "1.5rem"}}>Publication Chairs</b> 
           {publicationChairs.map(i=> {
            return (
              <p>{i}</p>
            )
           })}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
            <b style = {{fontSize: "1.5rem"}}>Technical Program 
            Committee Chairs </b>
            {technicalProgram.map(i=> {
              return(
                <p>{i}</p>
              );
            })}
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto",
              display: "flex", flexDirection: "column" // Allows height to expand
            }}
          >
           <b style={{fontSize : "1.5rem"}}>Sponsorship Chairs</b> 
           {sponsorshipChairs.map(i=> {
            return (
              <p>{i}</p>
            )
           })}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
            <b style = {{fontSize: "1.5rem"}}>Student activity and Award Chairs</b>
            {studentActivityAndAwardChairs.map(i=> {
              return(
                <p>{i}</p>
              );
            })}
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto",
              display: "flex", flexDirection: "column" // Allows height to expand
            }}
          >
           <b style={{fontSize : "1.5rem"}}>Hospitality Chairs</b> 
           {HospitalityChairs.map(i=> {
            return (
              <p>{i}</p>
            )
           })}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
            <b style = {{fontSize: "1.5rem"}}>WIE Chairs </b>
            {WIEChairs.map(i=> {
              return(
                <p>{i}</p>
              );
            })}
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto",
              display: "flex", flexDirection: "column" // Allows height to expand
            }}
          >
           <b style={{fontSize : "1.5rem"}}>Publicity Chairs</b> 
           {publicityChairs.map(i=> {
            return (
              <p>{i}</p>
            )
           })}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
            <b style = {{fontSize: "1.5rem"}}>Tutorial and Workshop Chairs</b>
            {tutorialAndWorshopChairs.map(i=> {
              return(
                <p>{i}</p>
              );
            })}
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto",
              display: "flex", flexDirection: "column" // Allows height to expand
            }}
          >
           <b style={{fontSize : "1.5rem"}}>Steering Committee Chairs</b> 
           {steeringCommitteeChairs.map(i=> {
            return (
              <p>{i}</p>
            )
           })}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
            <b style = {{fontSize: "1.5rem"}}>Special Session Chairs</b>
            {specialSessionChairs.map(i=> {
              return(
                <p>{i}</p>
              );
            })}
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
            <b style = {{fontSize: "1.5rem"}}>National Advisory Committee Members </b>
            {nationalAdvisory.map(i=> {
              return(
                <p>{i}</p>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
            <b style = {{fontSize: "1.5rem"}}>Institute Advisory Committee Chairs</b>
            {instituteAdvisory.map(i=> {
              return(
                <p>{i}</p>
              );
            })}
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "50rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto",
              display: "flex", flexDirection: "column" // Allows height to expand
            }}
          >
           <b style={{fontSize : "1.5rem"}}>International Advisory Committee Members</b> 
           {internationalAdvisory.map(i=> {
            return (
              <p>{i}</p>
            )
           })}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div
            style={{
              padding: "1.5rem",
              maxWidth: "70rem", // Restricts width
              width: "100%", // Allows responsiveness
              height: "auto", // Allows height to expand
            }}
          >
          </div>
        </Grid>
    </Grid>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  </main>
  )
}

export default OrganizingCommitteePage;