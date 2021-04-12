import { Link } from 'react-router-dom'   // using link instead of (a href) so the page does not reload 

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p> 
            <Link to='/about'>About</Link>

            {/* <a href='/about'>About</a> */}
        </footer>
    )
}

export default Footer

