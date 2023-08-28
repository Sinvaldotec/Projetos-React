import List from './List'
export default function Nav() {
  return (
    <nav>
      <ul>
        <List
        item = "About"/>
        <List
        item = "Projects"/>
        <List
        item = "Contact"/>
      </ul>
    </nav>
  )
}