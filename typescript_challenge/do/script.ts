(function() {
    const $ = (query:string): HTMLInputElement | null => document.querySelector(query);

    interface IVeiculo {
        nome: string;
        placa: string;
        entrada: Date;
    }

    function calcTempo(mil: number) {
        const min = Math.floor(mil/60000);
        const sec = Math.floor((mil % 60000) / 1000);
        
        return `${min} minutos e ${sec} segundos.`
    }

    function patio() {

        function ler(): IVeiculo[]{
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }

        function salvar(veiculos : IVeiculo[]){
            localStorage.setItem("patio" , JSON.stringify(veiculos));
        }

        function adicionar(veiculo: IVeiculo, salva?: boolean){
            const row = document.createElement('tr');
            row.innerHTML = `
            <td> ${veiculo.nome}    </td>
            <td> ${veiculo.placa}   </td>
            <td> ${veiculo.entrada} </td>
            <td> 
                <button class='delete' data-placa='${veiculo.placa} '> X 
                </button>  
            </td>
            `

            row.querySelector('.delete')?.addEventListener("click", function(){
                remover(this.dataset.placa);
            })
            
            if (salva = true) salvar([...ler(),veiculo])
            
            $('#patio')?.appendChild(row);

        }

        function remover(placa: string) {
            const {entrada, nome} = ler().find(veiculo => veiculo.placa === placa);

            const tempo = calcTempo(new Date().getTime() - entrada.getTime());

            if(confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)) return;

            salvar(ler().filter(veiculo => veiculo.placa !== placa));
            render();
        };


        function render(){
            $('#patio')!.innerHTML = "";
            const patio = ler();

            if (patio.length) {
                patio.forEach(veiculo => {
                    adicionar(veiculo, false);
                });
            }
        }

        return {ler, adicionar, remover, salvar, render};
    }

    patio().render();

    $('#cadastrar')?.addEventListener('click', () =>{
        const nome = $('#nome')?.value;
        const placa = $('#placa')?.value;
        
        if( !nome || !placa ){
            alert('Os campos nome e placa são obrigatórios!');
            return;
        }

        patio().adicionar( {nome, placa, entrada: new Date()}, true );
    });
})();