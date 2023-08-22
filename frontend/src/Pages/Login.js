import React,{useState} from "react";
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from "react-router-dom"
import UserService from '../Services/UserService'



const Login = () =>{

    const navigate = useNavigate();
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [errors , setErrors]= useState(
        {
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        bio:'',
        birthdate:'',
        
        }
    )
    const formValidation = ()=>{




        let status= true;
        let localErrors={...errors }
       
        if (email ==""){
            localErrors.email = 'Email required';
            status= false;

 


}
if (password =="" || password.length < 8 ){
    localErrors.password = 'Password required and min 8 caracteres';
    status= false;



}
setErrors(localErrors)
//console.log(localErrors)
return status;

    }

const signin= async(e)=> {
    e.preventDefault();
    console.log("form submited");

    if (formValidation()) { // form valid
        const data = {

        email: email,
        password: password,
    } 
    try {

        const response = await UserService.signin(data)
        console.log("response ===>", response);
        //save user data localstorage

        localStorage.setItem('user_data', JSON.stringify(response.data.user)  )
        localStorage.setItem('token', response.data.token)
        toast.success('User login ...');
        
        setEmail('')
        setPassword('')
        // redirection 
        navigate("/Home")



    } catch (err) {
        console.log(err)
        toast.error(err.response.data.message );
    }

    }else{ // form invalid
        console.log("form invalid");

    }

}

    return(
        
        <div className='login'>
            <Toaster/>
            <div className='login-cover'>

            </div>
            <div className='login-content'>
                 <div>
                    <h1>Dark Space</h1>
                    <p>Dark Space Social Media Application</p>
                </div>
                <div>
                    <form onSubmit={signin}>
                    <div className='form-group'>
                            <label> email </label>
                            <input className='input' type="email"
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)}/>

{
                            errors.email !=" "? 
                            <div style={{textAlign:'left', color : 'orangered'}}>
                                {errors.email }

                            </div>:''
                        }
                        </div>
                        <div className='form-group'>
                            <label> password </label>
                            <input className='input' type="password"
                            value={password} onChange={(e)=>setPassword(e.target.value)}/>

{
                            errors.password !=" "? 
                            <div style={{textAlign:'left', color : 'orangered'}}>
                                {errors.password }

                            </div>:''
                        }





                        </div>
                        <button className='btn signin' type='submit'>sign In</button>


                    </form>
                    </div>


            </div>
        </div>
    )
}
export default Login;
