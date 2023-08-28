const List = () => {
  const list = [{
    id : 1,
    name : "Sinvaldo",
    idade : 45
  },
  {
    id : 2,
    name : "Gilsiany",
    idade : 33
  },
  {
    id : 3,
    name : "Cida",
    idade : 50
  },
  {
    id : 4,
    name : "Jéssica",
    idade : 33
  }

]
  return (
    <ul>
      {
        list.map((aluno)=> (
          <li key={aluno.id}>
            ID: {aluno.id} | {aluno.name} - {aluno.idade} anos
          </li>
        ))
      }
    </ul>
  )
}

export default List