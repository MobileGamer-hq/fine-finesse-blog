
import {Link} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa6";
import '../styles/components/buttons.css'

export function ReadMoreButton() {
    return (
        <Link to = '/post' className={'read-more'}>
            <p>Read More</p>
            <FaArrowRight size={12}/>
        </Link>
    );
}

export function OutlinedButton({text, to} :{text: string, to: string}) {
    return (
        <Link to={to} className={'outlined-button'}>
            {text}
        </Link>
    )
}
