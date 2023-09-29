import Modal from "../components/Modal";
import {useState} from "react";
export default function Produtos() {
  
  document.title = "PRODUTOS";

  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Produtos</h1>

        {open ? <Modal open={true} setOpen={setOpen}/> : ""}

        <button onClick={()=> setOpen(true)}>OPEN-MODAL</button>

    </div>
  )
}
