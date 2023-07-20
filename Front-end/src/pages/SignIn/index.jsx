import { Container, Background, Form } from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({email, password})
  }


  return (
   <Container>
     <Form>
    <div>
      <h1>RocketMovies</h1>
      <p>Application to track everything you watch.</p>

      <h2>Login</h2>
    </div>
      
      <Input placeholder="E-mail" type="text" icon={FiLock} onChange={e => setEmail(e.target.value)}/> 
      <Input placeholder="Password" type="Password" icon={FiMail} onChange={e => setPassword(e.target.value)}/> 

    <Button title={"Sign in"} onClick={handleSignIn}/>

    <Link to={"/register"}>Create an account</Link>
    </Form>

    <Background/>

   </Container>
  )
}

