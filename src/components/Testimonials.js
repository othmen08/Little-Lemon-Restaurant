import './Testimonials.css'
import TestimonialCards from "./TestimonialCards";
export default function Testimonials({data}) {
    return (
        <section className="Testimonials">
        <h1>Testimonials:</h1>
        <TestimonialCards data={data} />
        </section>
    )
};