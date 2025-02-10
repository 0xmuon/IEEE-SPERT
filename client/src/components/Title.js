import React from 'react';



const Title = ({titleName}) => {
    const styles = {
        Titlebar:{
            background: 'linear-gradient(to right, rgba(0, 47, 75, .5) 40%, rgba(36, 92, 13, .48) 100%)',
        }
,
        Title:{
            marginBottom : '.5rem',
            fontFamily :'inherit',
            fontWeight: '350',
            lineHeight: '1.2',
            color: 'white'
        }
        
      }
  return (
    <div>
      <nav class="navbar bg-body-secondary" style={styles.Titlebar}> 
        <h2 className='Title' style={styles.Title}>{titleName}</h2>
      </nav>
    </div>
  )
}

export default Title
