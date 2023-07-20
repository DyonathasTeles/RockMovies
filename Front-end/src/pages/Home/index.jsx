import { Container, Content, NewNote } from "./style"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note"
import { Header } from "../../components/Header"
import { FiPlus} from "react-icons/fi"


import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"


export function Home() {

  const [search, setSearch] = useState("")
  const [tag, setTag] = useState([])
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tag}`)
      console.log(response.data);
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)}/>

      <Content>

        <div className="header">
        <h1>My Movies</h1>
        <div>
        <NewNote to="/new">
          <FiPlus/>
          Add Movie
        </NewNote>
        </div>
        </div>

      
        <section className="Notes">
  
        {
          notes.map( note => (
            <Note key={String(note.id)} data={note} onClick={() => handleDetails(note.id)} />
          ))          
        }

        </section>


      </Content>
    </Container>
  )
}