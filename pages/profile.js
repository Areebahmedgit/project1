import Head from "next/head";
import Heade from "./component/Head";

export default function Profile() {
    return(
        <>
        <Heade/>
        <Head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
        </Head>
        <div class="margi">
        <div><h1>Profile</h1></div>
        <div class="card-group card1">
  <div class="card">
    <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1xw:1.0xh;center,top&resize=1200:*" class="card-img-top im" alt=""/>
    <div class="card-body">
      <h3 class="card-title">Elon musk</h3>
      <div><h5>password</h5></div>
     <div class="wid"> <input type="text" class="form-control mar" id="exampleFormControlInput1" placeholder="First name" />
  <input type="text" class="form-control mar" id="exampleFormControlInput1" placeholder="Last name" />
  <input type="password" class="form-control mar" id="exampleFormControlInput1" placeholder="Repeat password" />

  </div>
  <button type="button" class="btn btn-primary btns">Update password</button>
    </div>
  </div>
  </div>
        </div>
        </>
    )
}