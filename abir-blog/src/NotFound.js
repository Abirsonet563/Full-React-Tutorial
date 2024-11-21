import { Link } from "react-router-dom/cjs/react-router-dom.min"

const NotFound = () => {
    return(
        <div className="NotFound">
            <h2>Sorry</h2>
            <p>That Page Can't Be Found</p>
            <Link to="/">Back to The Home Page</Link>
        </div>
    )
} 

export default NotFound;