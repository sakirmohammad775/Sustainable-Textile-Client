import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import img1 from "../../assets/pngtree-aesthetic-white-paper-texture-background-with-ample-space-for-design-elements-image_13863010.png"

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    // const backgroundImageStyle = {
    //     backgroundImage: `url(${signUpImage})`,
    //     backgroundSize: 'cover', // Cover the enti fre div
    //     backgroundPosition: 'center', // Center the image
    //     backgroundRepeat: 'no-repeat', // Do not repeat the image
    // };

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate('/')
            })
    }
    return (
        <>
            <Helmet>
                <title>Sustainable| Sign In</title>
            </Helmet>
            <div className="hero min-h-screen pt-40 mb-40"  style={{ backgroundImage: `url("${img1}")` }}>
                <div className="hero-content flex-col text-black">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp</h1>
                        <p className="py-6">Explore Our page</p>
                    </div>
                    <div className="card  w-full max-w-lg bg-transparent">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control w-96">
                                <label className="label">
                                    <span className="font-bold">Name</span>
                                </label>
                                <input {...register("name")} type="name" placeholder="name" name="name" className="input input-bordered bg-transparent  " />
                                {errors.name && <span className="text-red-600">Name field is required </span>}
                            </div>
                            <div className="form-control w-96">
                                <label className="label">
                                    <span className="font-bold">Photo URL</span>
                                </label>
                                <input {...register("photoURL")} type="text" placeholder="Photo URL" name="name" className="input input-bordered bg-transparent  " />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email"
                                    name="email"
                                    className="input input-bordered bg-transparent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold">Password</span>
                                </label>
                                <input {...register("password")} type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered bg-transparent" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-3">
                                <button type="submit" className="btn  bg-transparent">SignUp</button>
                            </div>
                        </form>
                        {/*if error found*/}


                        <p className="text-center">Already have an account? <Link to="/signIn">Sign In</Link></p>

                        {/*another login process*/}
                        <div className="flex my-5 justify-center gap-6">

                            <button className="pt-2"><FaGoogle /></button>
                            <button className="pt-2"><FaFacebook /></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignUp;