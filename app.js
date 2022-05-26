console.log('hello world')

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const ivan = new User('ivan', 28)
console.log(ivan)

const slider = `
  <div>
    <div class="slider">
      <div class="slider-wrapper">
        <div class="slide">1</div>
        <div class="slide">2</div>
        <div class="slide">3</div>
      </div>
    </div>
  </div>
`

const getProductCardHtml = () => `
  <article class="card">
    <h3 class="card__title">Title</h3>
    <div class="card__body">
      <p class="card__desc">Description</p>
    </div>
  </article>
`

console.log(getProductCardHtml())