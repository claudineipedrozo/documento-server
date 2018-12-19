import express from 'express';
import VerificacaoController from '../controllers/VerificacaoController';

const router = express.Router();
const controller = new VerificacaoController();


router.post('/cpf', controller.verificarCpf);
router.post('/cnpj', controller.verificarCnpj);

export default router;
