export function BottomWarning({label , buttonText , to}){
    return <div className="flex justify-center gap-2">
        <div>{label}</div>
        <button className="underline">{buttonText}</button>
    </div>
}