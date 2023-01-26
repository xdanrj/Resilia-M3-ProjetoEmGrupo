/* Lista dos produtos */
const items = [
    {
    id:0,
    nome:'GT 1030',
    img: 'img/gpu2.png',
    quantidade: 0,
    preco: 200
    },
    {
    id:1,
    nome:'RTX 5090',
    img: 'img/gpu1.png',
    quantidade: 0,
    preco: 8000
    },
    {
    id:2,
    nome:'PC Celeron 4GB RAM',
    img: 'img/pc1.png',
    quantidade: 0,
    preco: 1200
    },
    {
    id:3,
    nome:'PC i5 8GB RAM',
    img: 'img/pc2.png',
    quantidade: 0,
    preco: 1800
    },
    {
    id:4,
    nome:'Memória RAM 8GB',
    img: 'img/ram1.png',
    quantidade: 0,
    preco: 180
    },
    {
    id:5,
    nome:'Gabinete Gamer',
    img: 'img/gabinete1.png',
    quantidade: 0,
    preco: 150
    },
    {
    id:6,
    nome:'Teclado Gamer',
    img: 'img/teclado1.png',
    quantidade: 0,
    preco: 100
    },
    {
    id:7,
    nome:'Mouse Gamer',
    img: 'img/mouse1.png',
    quantidade: 0,
    preco: 100
    }
]

/* Declara função que mostrará os produtos e seus respectivos botões */
iniciarLoja = () => {
    var containerProdutos = document.getElementById("produto");
    items.map((val)=>{
        containerProdutos.innerHTML+= `
        
        <div class="produto-single">
            <img src="`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#" class="id_add">adicionar</a>
            <a key="`+val.id+`" href="#" class="id_del">remover</a>

            
            </div>
            `;
    })
}
iniciarLoja();

/* Mostra no CONSOLE toda as alterações no CARRINHO */
atualizarCarrinho = () => {
    console.log(items);
}

/* declara variaveis que serao usadas nos FOR */
var a_add = document.getElementsByClassName('id_add');
console.log(a_add);
var a_del = document.getElementsByClassName('id_del');
console.log(a_del);

/* FOR que adiciona quantidade */
for(var i = 0; i < a_add.length; i++){
    a_add[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}

/* FOR que remove quantidade */
for(var i = 0; i < a_del.length; i++){
    a_del[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade--;
        atualizarCarrinho();
        return false;
    })
}

/* Declara função que atualiza as informações mostradas no carrinho */
atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
        items.map((val)=>{
            val.preco = parseInt(val.preco);
            val.quantidade = parseInt(val.quantidade);
            val.total = val.quantidade * val.preco;

            if(val.quantidade > 0){
                containerCarrinho.innerHTML+= `
                <p>`+val.nome+` | quantidade: `+val.quantidade+` | total: `+val.total+`</p>
                <hr>
                `;
        
        }
})
}
