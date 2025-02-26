import './Specials.css'
import Cards from "../components/Cards";
export default function Specials({data}) {
    return(
        <section className="specials">
        <div>
          <h1>This weeks specials:</h1>
        </div>
        <Cards data={data} />
      </section>
    )
}