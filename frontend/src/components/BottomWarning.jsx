import {Link} from "react-router-dom"
export function BottomWarning({label , buttonText , to}){
    return <div className="flex justify-center gap-2">
        <div>{label}</div>
        <Link className="underline" to={to}>{buttonText}</Link>
        
    </div>
}