import React, { useRef, useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { database } from "../../firebase"
import { useAuth } from "../../contexts/AuthContext"
import { ROOT_FOLDER } from "../../hooks/useFolder"
import { unstable_batchedUpdates } from "react-dom"
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');



  function Like() {
    const FieldValue = require('firebase-admin').firestore.FieldValue;
    var chainCounterRef = db.collection("posts").doc(post.likes);
    chainCounterRef.update({ count: FieldValue.increment(1) });
  } return (
    <>
      <Button onClick={Like} variant="outline-success" size="md">
      Like
      </Button>
    </>
  const getIncrement = amount => firebase.firestore.FieldValue.increment(amount)
);

