// Objeto
const contador = {
    cant: 0,
    $label: document.createElement('span'),
    $button: document.createElement('button'),

    add: function(){
        this.cant++;
        this.$label.innerText = this.cant
    },

    init: function(){
        document.body.appendChild(this.$label)
        document.body.appendChild(this.$button)

        this.$label.innerText = this.cant
        this.$button.innerText = "+"

        this.$button.addEventListener('click', ()=>{
            this.cant++
            this.$label.innerText = this.cant
        } )

        this.$button.addEventListener('click', function(){
            this.style.color="#F0F"
        })

    }
}

contador.init()

function p (){
    console.log("THIS", this)
}
