type Produto = {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
    emEstoque: boolean;
};

const produtos: Produto[] = [
    {
        id: 1, 
        nome: "iPhone 15",
        preco: 4000.99,
        categoria: "Eletrônicos",
        emEstoque: true
    },
    {
        id: 2,
        nome: "Geladeira",
        preco: 5000.99,
        categoria: "Eletrodomesticos",
        emEstoque: false
    },
    {
        id: 3,
        nome: "Sofá",
        preco: 3000.99,
        categoria: "Móveis",
        emEstoque: true
    }
]

function exibirProduto (produto: Produto): string {
    const precoFormatado = produto.preco.toLocaleString("pt-BR", 
        {
            style: "currency",
            currency: "BRL"
        }
    );

    const status = produto.emEstoque ? "disponível" : "indisponível";

    return `[${produto.categoria}] ${produto.nome} - ${precoFormatado} ${status}`;
}

console.log("=== Catálogo de Produtos ===\n");

for (const produto of produtos) {
    console.log(exibirProduto(produto));
}