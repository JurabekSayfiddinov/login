import React from 'react'
import { axiosRequest, saveToken } from './utils/token';

const App = () => {

  async function logIN(info){
    try {
      let {data}=await axiosRequest.post('/auth/login',info)
      saveToken(data.token,data.refresh)
    } catch (error) {
      console.log(error);
      
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    let info={
      email:e.target.email.value,
      password:e.target.password.value
    }
    logIN(info)
    e.target.reset()
  }
  return (
    <>
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <input name='email' type="email" placeholder='Email...' />
      <input name='password' type="text" placeholder='Password...' />
      <button type='submit'>Log IN</button>
    </form>
    </>
  )
}

export default App