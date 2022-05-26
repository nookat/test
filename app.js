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