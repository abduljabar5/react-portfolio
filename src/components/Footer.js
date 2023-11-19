import React from "react";
import icon1 from '../images/github.svg'
import icon2 from '../images/linkedin.svg'
import icon from '../images/download.svg';
import resumeUrl from '../images/Resume-v2.docx.pdf'

const styles = {
    footer: {
        position: 'relative',
        // bottom: '-370px',
        padding: '5rem 0',
        width: '100%'
    },
  };
function footer (){
    return (
        <footer style={styles.footer} className="footer bg-black text-light text-center ">
            <a  href="https://linkafy.vercel.app/655a1746c3f55ee6e11d5fca"><img className="icons"src={icon1}></img></a>
            <a  href="https://linkafy.vercel.app/655a17bfc3f55ee6e11d5fd8"><img className="icons"src={icon2}></img></a>
            <a  href={resumeUrl} target="_blank" download = "Abduljabar's_Resume.pdf"><img className='icons icon' src={icon} alt="Download Resume"></img></a>
        </footer>

    )
}
export default footer;