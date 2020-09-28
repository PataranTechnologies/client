import React, { Component, useState } from 'react';
import './sign.css'
import {withRouter} from 'react-router-dom';
const SignInPage=(props)=>{


    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [activeScreen,setActiveScreen]=useState("login");
    const [email1,setEmail1]=useState("")
    const [password1,setPassword1]=useState("")
    const [redirect,setRedirect]=useState(false);
    const [passMatch,setPassMatch]=useState(true)
    const submitHandler=()=>
    {
    
        if(!(email && password))
        {
          alert("All Field Required");
        }
    
        fetch("http://localhost:5000/user/login",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({email:email,password:password})
        }).then(res=>res.json()).then(res=>{
    
    
            if(res.success===true)
            {
    
           // props.addUser(res.data);
    
                 
        setRedirect(true);
    
            }
            else
            {
                alert(res.message);
                alert("error")
            }
        
        
        
        
        }).catch(error=>{
            alert(error);
        })
    
    
     
        
    }
    const onRegister=()=>{
    if(!(passMatch && name && email1 && password1))
    {
        alert("All Fields required");
        return;
    }
    
        fetch("http://localhost:5000/user/register",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name:name,email:email1,password:password1 })
    }).then(res=>res.json()).then(res=>{
    
        if(res.success===true)
        {
    
      //  props.addUser(res.data);
             
        setRedirect(true);
    
        }
        else
        {
            alert(res.message);
        }
    
    
    
    }).catch(error=>{
        alert(error);
    })
    
    }
    const verifyPassword=(pass)=>{
    
        if(pass===password1)
        {
    
            setPassMatch(true)
        }
        else
        {
            setPassMatch(false);
        }
    
    }
    
            if(redirect)
            {
                props.history.push("/Home");
            }
    return (

        <div className='outerContainer'>
            
            <div className='FormContainer'>
            <div style={{display:'flex',flexDirection:"row"}}>
            <h2 onClick={()=>{setActiveScreen('login')}} className="loginDivButton">Login  </h2>

            <h2> / </h2>

            <h2 onClick={()=>{setActiveScreen('register')}} className="registerDivButton" >  Register</h2>

            </div>
            {
                activeScreen==='login'?
                <div style={{alignSelf:'center',width:'90%'}}>
           
           <div className='mardiv'>
            <input className='emailInput' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className='mardiv'>
            <input className='nameInput' type='password' security={true} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
           </div>
            <div className='mardiv'>
            <button className='submitButton' onClick={submitHandler} > Login</button>
            </div>
            </div>:
            <div style={{alignSelf:'center',width:'90%'}}>
                 <div className='mardiv'>
             <input className='nameInput'  onChange={(e)=>setName(e.target.value)} placeholder='Full Name' />
            </div>

       
            <div className='mardiv'>
             <input className='emailInput' placeholder='Enter Email' onChange={(e)=>setEmail1(e.target.value)} />
             </div>
 
             <div className='mardiv'>
             <input className='nameInput' type='password' security={true} onChange={(e)=>setPassword1(e.target.value)} placeholder='Enter Password' />
            </div>

            <div className='mardiv'>
             <input className={"nameInput"} type='password' onChange={(e)=>verifyPassword(e.target.value)} security={true}  placeholder='ReEnter Password' />
            {passMatch?"":<p style={{color:'red'}}>Password does not match</p>}
            </div>
             <div className='mardiv'>
             <button className='submitButton' onClick={onRegister} > Register</button>
             </div>
             </div>
           

    }
            </div>


            </div>
    )

}


export default withRouter(SignInPage)