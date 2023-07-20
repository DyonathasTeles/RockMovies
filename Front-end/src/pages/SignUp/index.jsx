import { useState } from "react"  
import { api } from "../../services/api"

import { Container, Background, Form } from "./style"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"

export function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleCreate() {
    if (!name || !email || !password) {
     return alert("fill in all fields")
    }

    api.post("/users", { name, email, password})

    .then(() => {
      alert("account created successfully") 
      navigate(-1)
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("could not create account")
      }
    })
    
  }

  return (
   <Container>

    <Background/>

     <Form>
    <div >
      <h1>RocketMovies</h1>
      <p>Application to track everything you watch.</p>

      <h2>Create your account</h2>
    </div>
      
      <Input placeholder="Name" type="text" icon={FiUser} onChange={e => setName(e.target.value)}/> 
      <Input placeholder="E-mail" type="text" icon={FiLock} onChange={e => setEmail(e.target.value)}/> 
      <Input placeholder="Password" type="Password" icon={FiMail} onChange={e => setPassword(e.target.value)}/> 

    <div className="sign">
      <Button title={"Sign Up"} onClick={handleCreate}/>
    </div>

    <Link to={"/"}> <FiArrowLeft/> Back to login </Link>

    </Form>

   </Container>
  )
}

