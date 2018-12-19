import validacao from 'cpf_cnpj';


class VerificacaoController {

    verificarCpf(req, res) {

        try {

            const cpf = req.body.cpf;
            let resposta = {cpf, valido: false}; 

            const validador = validacao.CPF;
            
            resposta.valido = validador.isValid(cpf);

            res.json(resposta);
            
           
        }catch (erro) {
            console.log(erro);
            res.status(500).json('Algo deu errado');
        }        
        
    }

    verificarCnpj(req, res) {

        try {

            const cnpj = req.body.cnpj;
            let resposta = {cnpj, valido: false}; 

            const validador = validacao.CNPJ;
            
            resposta.valido = validador.isValid(cnpj);

            res.json(resposta);
            
           
        }catch (erro) {
            console.log(erro);
            res.status(500).json('Algo deu errado');
        }        
        
    }
}

export default VerificacaoController;