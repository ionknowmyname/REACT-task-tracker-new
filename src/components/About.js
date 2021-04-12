import { Link } from 'react-router-dom'   // using link instead of (a href) so the page does not reload 

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to='/'>Go back</Link>        
            {/* <a href='/'>Go back</a> */}
        </div>
    )
}

export default About
