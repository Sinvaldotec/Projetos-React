import Aprovado from "./Aprovado"
import Reprovado from "./Reprovado"
import { useState } from "react"

const RenderCom = () => {
  const [res, setRes] = useState(0)

  let nota1 = 10
  let nota2 = 8
  let nota3 = 10
  let media = 0

  const changeClick = () => {
    media = (nota1 + nota2 + nota3) / 3
    setRes(media)
    console.log(media);
  }
  return (
    <div>
      <h1>Media do aluno</h1>
        {res > 6 && <Aprovado
        media={res}/>}
        {res > 1 && res < 6 && <Reprovado
        media={res}/>}

        <button onClick={changeClick}>ver</button>

    </div>
  )
}

export default RenderCom