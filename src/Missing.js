// This is the code if a view is attempted 
// that does not exist.
import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>Page Not Fount</h2>
            <p>Lost in chaos.</p>
            <p>
                <Link to='/'>Please Come Back Home</Link>
            </p>
        </main>
    )
}

export default Missing;