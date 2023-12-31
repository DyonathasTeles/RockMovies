import { Container, Form, Avatar } from "./style"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FiMail, FiUser, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"
import { useState } from "react"
import AvatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"



export function Profile() {
  const navigate = useNavigate()

  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name: name,
      email: email,
      password: passwordNew,
      oldPassword: passwordOld
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated , avatarFile })
  }

  function handleBack() {
    navigate(-1)
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
    
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack}> <FiArrowLeft/> Return </button>
        </header>

        <Form>

          <Avatar>
            <img src={avatar} alt="" />

            <label htmlFor="avatar">
              <FiCamera/>
              <input type="file" id="avatar" onChange={handleChangeAvatar}/>
            </label>
          </Avatar>

          <Input placeholder="Name" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)} />
          <Input placeholder="E-mail"  type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="Current password" type="password" icon={FiLock} onChange={e => setPasswordOld(e.target.value)} />
          <Input placeholder="New password" type="password" icon={FiLock} onChange={e => setPasswordNew(e.target.value)} />

          <Button title={"Save"} onClick={handleUpdate} />
        </Form>


    </Container>
  )
}