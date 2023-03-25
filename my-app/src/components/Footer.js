import React from "react";

const styles = {
    footer: {
        position: 'relative',
        bottom: '-370px',
        padding: '5rem 0',
        width: '100%'
    },
  };
function footer (){
    return (
        <footer style={styles.footer} className="footer bg-black small text-center text-white-50"><div className="container px-4 px-lg-5">Copyright &copy; Your Website 2022</div></footer>

    )
}
export default footer;