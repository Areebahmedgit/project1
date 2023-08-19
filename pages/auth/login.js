import Head from "next/head";
import Link from "next/link";
import Heade from "../component/Head";
export default function Signinn({signin}) {
       signin = true
    return(
        <> 
        <Heade/>
        <Head>
            
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
        </Head>
        
         <div class="sign"><h1><b>Signin</b></h1>
        </div>
       <center> <div class="mb-3 cen">
  <input type="email" class="form-control mar" id="exampleFormControlInput1" placeholder="Email" />
  <input type="password" class="form-control mar" id="exampleFormControlInput1" placeholder="password" required/>
  <Link
                  href={signin ? "/auth/Signup" : "/auth/Signup"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {signin
                    ? "Do not have an account? Signup"
                    : "Already have an account? Sign in"}
                </Link>
  <button type="button" class="btn btn-primary btns">Login</button>
</div>
</center>
        </>
    )
}