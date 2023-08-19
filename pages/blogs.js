import Head from "next/head";
import Heade from "./component/Head";
import Link from "next/link";

export default function Bavkblog() {
    return(
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
        </Head>
        <Heade/>
        <div class="margi">
        <div><Link href={"/"}><h1>Back to all Blogs</h1></Link></div>
        <div><h5>All from Elon musk</h5></div>
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1xw:1.0xh;center,top&resize=1200:*" class="img-fluid rounded-start siz" alt="err"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
       <div class="fle"> <h3 class="card-title">introducind whisper</h3>
       <h6 class="card-title">Elon musk august 17th 2023</h6>
       </div>
        <p class="card-text par">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
        </>
    )
}