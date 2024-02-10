import { Link } from "react-router-dom"


export const BottomWarning = ({label, to, buttonText})=>{
return (
    <div>
        <div>
            {label}
        </div>
        <div>
            <Link to={to}>
            {buttonText}
            </Link>

        </div>
    </div>
)
}