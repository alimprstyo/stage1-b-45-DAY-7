class Testimonial {
    constructor( quote, img){
        this._quote = quote
        this._img = img
    }
    get quote() {
        return this._quote
    }

    get image() {
        return this._img
    }

    get html() {
        return `
        <div class="card">
            <img src="${this.image}" alt="testimonial">
            <p id="quote">"${this.quote}"</p>
            <p id="author">- ${this.author}</p>
        </div>
        `
    }
}
class AuthorTestimonial extends Testimonial{
    constructor (author, quote, img){
        super(quote,img)
        this._author = author
    }
    get author() {
        return this._author
    }
}
class CompanyTestimonial extends Testimonial{
    constructor (company, quote, img){
        super(quote,img)
        this._company = company
    }
    get author() {
        return `${this._company} Company`
    }
}

const testimonial1 = new AuthorTestimonial ('Alim', 'Mantap-mantap Keren!','https://source.unsplash.com/500x500?man');
console.table(testimonial1)
const testimonial2 = new AuthorTestimonial ('Prasetyo', 'Okok mantap','https://source.unsplash.com/500x500?man');
const testimonial3 = new CompanyTestimonial ('Google', 'Biasa aja.','https://source.unsplash.com/500x500?man');

const dataTestimonial = [testimonial1,testimonial2,testimonial3]
let testiCard = "";

for(let i = 0 ; i < dataTestimonial.length; i++){
    testiCard += dataTestimonial[i].html
}

document.getElementById('testimonial').innerHTML = testiCard