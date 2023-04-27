import React from "react";
import icon1 from '../images/github.svg'
import icon2 from '../images/linkedin.svg'
import icon3 from '../images/stackoverflow.svg'

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
            <a  href="www.github.com/abduljabar5"><img className="icons"src={icon1}></img></a>
            <a  href="https://www.linkedin.com/in/abduljabar-nur-11b18b257/"><img className="icons"src={icon2}></img></a>
            <a  href="https://stackoverflow.com/"><img className="icons"src={icon3}></img></a>
        </footer>

    )
}
export default footer;