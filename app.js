const app = Vue.createApp({
    data() {
        return{
             items: [ ], //Armazena os dados
             selecionaItem:null,
             editarItem: {
                className:'',
                type:'',
                hours:'',
                trainer:'',
                sport:''
             }
        }
    }
},

methods: {
    abrirEdicaoModal(items) {
        this.selecionaItem = items;
        this.editarItem = { ...items }; // Copia os itens para que não afetem os dados originais
        // abre o modal de edição
    },

    salvaAtualizacao() {
        //atualizar os dados do item na tabela
        const index = this.items.findIndex(items => items === this.selecionaItem);
        if (index !== -1) {
            this.items[index] = { ...this.editarItem}

        }
        //fecha o modal de edição
    }
});
app.mount('#app');

