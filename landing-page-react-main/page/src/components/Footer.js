import List from './List'
export default function Footer () {
  return (
    <footer>
      <p>Desenvolvidor por, sinvaldo.tecnologia;</p>
      <nav>
        <ul>
          <List
          item = "Instagram"/>
          <List
          item = "Github"/>
          <List
          item = "Twitter"/>
        </ul>
      </nav>
    </footer>
  )
}