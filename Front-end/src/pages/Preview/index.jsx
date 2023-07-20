import { Container, Content } from "./style";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiX } from "react-icons/fi"
import { AiOutlineFieldTime } from "react-icons/ai"
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Stars } from "../../components/Stars";



export function Preview() {

  const { user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder

  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState()
  
  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Do you really want to remove the note?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }
  
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      console.log(response.data);
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header/>
      <Content>
      {
        data &&
        <main>
          <div className="options">
          <button className="return" onClick={handleBack} > <FiArrowLeft/> Return </button>

          <button className="remove" onClick={handleRemove}> <FiX/> Remove </button>
          </div>

          <div className="title-rating">
          <h1>{data.title}</h1>
          <Stars dataValue={data.rating} />
          </div>

          <div className="profile-date">

            <div className="profile">
            <img src={avatarUrl} alt={user.name} />
            <p>{user.name}</p>
            </div>

            <div className="time">

              <AiOutlineFieldTime/>
              <span>{data.updated_at}</span>

            </div>

          </div>

          {
            data.tags &&
          <div className="tags">
            {
              data.tags.map(tag => (
                <Tag key={tag.id} title={tag.name}/>
              ))
            }
          </div>
          }

          <section>
          <p>
            {data.description}
          </p>
          </section>
        </main>
      }
      </Content>
    </Container>
  )
}