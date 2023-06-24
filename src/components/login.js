import "./login.css";
export default function Loginpage(){
    return(
        <>
            <div className="card mt-2">
                <h1 className="m-2 text-center text-primary">Login </h1>
            <form>
            <div className="m-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="m-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary m-3">Submit</button>
        </form>
            </div>
        </>
    )
}