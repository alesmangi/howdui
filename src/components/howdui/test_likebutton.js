import React, { useRef, useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { database } from "../../firebase"
import { useAuth } from "../../contexts/AuthContext"
import { ROOT_FOLDER } from "../../hooks/useFolder"

export default function AddFolderButton({ currentFolder }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const { currentUser } = useAuth()
  const titleRef = useRef()
  const contentRef = useRef()

  function Like() {
    //Find the post associated with this, then increment it's likes 
    
  }


  return (
    <>
      <Button onClick={Like} variant="outline-success" size="lg">
      Create a Post
      </Button>
    </>
  )
}
