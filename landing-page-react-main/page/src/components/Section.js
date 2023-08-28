import Card from './Card'
export default function Section ({tittle}) {
  return (
    <section>
      <h1>{tittle}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi optio voluptates ratione quaerat illo adipisci delectus asperiores accusantium temporibus. Deleniti, rem unde alias totam iusto quaerat saepe dicta dolore esse!</p>
      <div className ="cards">
        <Card
        tittle = "Card 1"/>
        <Card
        tittle = "Card 2"/>
        <Card
        tittle = "Card 3"/>
        <Card
        tittle = "Card 4"/>
        <Card
        tittle = "Card 5"/>
        <Card
        tittle = "Card 6"/>
      </div>
    </section>
  )
}