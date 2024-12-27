
import { useContext } from 'react';
import img1 from '../../assets/360_F_491473567_gIr3ndIFtW2Cd5GD5UnG0tNXVgK7g25J.jpg'
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Providers/AuthProvider';

const SignIn = () => {
    const {signIn}=useContext(AuthContext)

    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
    }

       


    return (
        <>
            <div className="hero min-h-screen" style={{backgroundImage:`url("${img1}")`}}>
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignIn</h1>
                        <p className="py-6">Explore Our page</p>
                    </div>
                    <div className="card  w-full max-w-lg bg-transparent">
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name="email"
                                    className="input input-bordered bg-transparent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered bg-transparent" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type="submit" value="Submit" className="btn  bg-transparent">SignIn</button>
                            </div>
                        </form>
                        {/*if error found*/}
                        {/* {error && <p className="text-red-500 text-sm mb-4">{error}</p>} */}


                        <p className="text-center">New Here? Create a new Account-- <Link to="/signUp">Sign Up</Link></p>

                        {/*another login process*/}
                        <div className="flex my-5 justify-center gap-6">

                            {/* <button className="pt-2"onClick={handleGoogleSignIn}><FaGoogle/></button> */}
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;