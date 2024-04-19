import { Link } from 'react-router-dom'
import './NotFoundStyles.css';

function NotFound() {
  return (
    <div>
      <h2 className="error">Error 404</h2>
      <p className="not-found">Page Not Found</p>
      <p className="back-home">Go back to <Link className='back-home-btn' to="/">Home</Link></p>
    </div>
  )
}

export default NotFound;