function Contador(){
    this.cant=0
    this.$label= document.createElement('span')
    this.$button= document.createElement('button')

    this.$button.innerText = '+'
    this.$label.innerText = this.cant

    document.body.appendChild(this.$label)
    document.body.appendChild(this.$button)

    this.$button.addEventListener('click', ()=>{
        this.add()
    })

    this.add=()=>{
        this.cant++
        this.$label.innerText = this.cant
    }
}

const cont = new Contador()
const cont1 = new Contador()
const cont2 = new Contador()