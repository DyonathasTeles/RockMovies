import { Container, Profile, SignOut } from "./style"

import { Input } from "../Input"
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import AvatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({...rest}) {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return (
    <Container>

      <h1>RocketMovies</h1>

      <Input placeholder="Search by title" type="text" {...rest} />

      <Profile className="profile">
        <div>
        <Link to={"/profile"}>{user.name}</Link>
        <SignOut onClick={handleSignOut}>exit</SignOut>
        </div>
        <Link id="img" to={"/profile"}><img src={avatarUrl} alt={user.name} /></Link>
      </Profile>
    </Container>
  )
}