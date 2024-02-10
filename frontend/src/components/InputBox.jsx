

export const InputBox = ({placeholder, label})=>{
    return(
        <>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input type="text" placeholder={placeholder}  className={"w-full px-2 px-1"} ></input>
        </>
    )
}