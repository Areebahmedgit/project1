import Link from "next/link";

export default function Heade() {
    return(
        <>
        <div class="nav-back"><h1 class="na"> Personal Blogging App</h1>
       <Link href={"/auth/login"}><h3 class="logi">Login</h3></Link> 
        </div>
        </>
    )
}