import Head from "next/head";
import Link from "next/link";
import Heade from "../component/Head";
export default function Signn({signin}) {
    signin = false
    return(
        <>
        <Heade/> 
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
        </Head>
         <div class="sign"><h1><b>Signup</b></h1>
        </div>
       <center> <div class="mb-3 cen">
  <input type="text" class="form-control mar" id="exampleFormControlInput1" placeholder="First name" />
  <input type="text" class="form-control mar" id="exampleFormControlInput1" placeholder="Last name" />
  <input type="email" class="form-control mar" id="exampleFormControlInput1" placeholder="Email" />
  <input type="password" class="form-control mar" id="exampleFormControlInput1" placeholder="password" />
  <input type="password" class="form-control mar" id="exampleFormControlInput1" placeholder="Repeat password" />
  <Link
                  href={signin ? "/auth/login" : "/auth/login"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {signin
                    ? "Do not have an account? Signup"
                    : "Already have an account? Sign in"}
                </Link>
  <button type="button" class="btn btn-primary ">Signup</button>
</div>

</center>
        </>
    )
}