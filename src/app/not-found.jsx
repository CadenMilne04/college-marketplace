import Link from "next/link"

export default function Custom404(){
    return(
        <div className="h-screen flex flex-col justify-center items-center">
            <h1>404 - Page Not Found.</h1>
            <p>
                Click 
                <span>
                    <Link href="/" className="text-blue-500 underline mx-2">Here</Link>
                </span>
                to Return Home.
            </p>
        </div>
    )
}
