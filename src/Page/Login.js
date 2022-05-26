import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useEffect } from 'react';
import UseToken from '../hooks/UseToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, googleUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = UseToken(user || googleUser);
     
    useEffect(() => {
        let from = location?.state?.from?.pathname || "/"
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token])

    let signInError;
    if(error || gError){
        signInError = <p>{error?.message || gError?.message}</p>
    }

    if(loading || gLoading){
        return <Loading></Loading>
    }
    
    
    
    
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);

    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold text-secondary">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or length'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                            <p className='text-red-500'>{signInError}</p>
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                    </form>
                    <p>New To Doctor Portal : <Link  className='text-secondary' to='/signup'>Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Login;