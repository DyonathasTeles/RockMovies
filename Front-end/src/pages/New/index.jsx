import { Container, Content, Section } from "./style"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"
import { Textarea } from "../../components/Textarea"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { FiArrowLeft } from "react-icons/fi"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"


export function New() {
 const [newTag, setNewTag] = useState("")
 const [tags, setTags] = useState([])
 const [title, setTitle] = useState("")
 const [description, setDescription] = useState("")
 const [rating, setRating] = useState("")
 
 const navigate = useNavigate()

function handleBack() {
  navigate(-1)
}
 
 function handleAddTag() {
  if (!newTag) {
    return
  }

  let tagsX 

  for (let index = 0; index < tags.length; index++) {
    tagsX = tags[index] === newTag
  }

  if(tagsX) {
    return alert("essa tag ja existe")
  }

  setTags(prevState => [...prevState, newTag])
  setNewTag("")
 }

 function handleRemoveTag(deleted) {
  setTags(prevState => prevState.filter(tag => tag !== deleted))
 }

 async function handleNewNote() {

  if (!title) {
    return alert("The title is required!")
  }

  if(!rating) {
    return alert("Movie review is require!")
  }

  if (!description) {
    return alert("Description is required!")
  }

  if (!tags.length) {
    return alert("The title, movie rating, description and tag are required!")
  }

  if(newTag) {
    return alert("you filled in the add tag field but didn't click add, click add or delete what's inside the field")
  }

  await api.post("/notes", {
    title,
    description,
    rating,
    tags
  })

  alert("successfully created note")
  navigate(-1)
 }

  return(
    <Container>
    <Header/>

    <Content>
      <div className="header">  
      <button onClick={handleBack}> <FiArrowLeft/> Return </button>
      <h1>New movies</h1>
      </div>

      <div className="inputs">
      <Input placeholder="Title" type="text" onChange={e => setTitle(e.target.value)}/>
      <Input placeholder="Your grade (from 0 to 5)" type="number" onChange={e => setRating(e.target.value)} max="5" min="0" />
      </div>

      <Textarea placeholder="Comments" onChange={e => setDescription(e.target.value)}/>

      <Section>
        <h2>Tags</h2>

        <div className="tags">
          {
            tags.map((tag, index) => (
              <NoteItem key={String(index)} value={tag}  onClick={() => handleRemoveTag(tag)} />
            ))
          }
          <NoteItem placeholder="New tag" isnew value={newTag} onChange={e => setNewTag(e.target.value)} onClick={handleAddTag}/>
        </div>
      </Section>

      <div className="buttons">
      <Button title={"Delete note"} isBlack={true} onClick={handleBack} />
      <Button title={"Save editions"} onClick={handleNewNote} />
      </div>

    </Content>
  </Container>
  )
}