import { Express } from 'express';

import { ProdutoController } from '../controllers/produto.controller';

export function produtoRoute(app: Express): void {
    app.route('/produtos')
        .get(ProdutoController.getAllProdutos)
        .post(ProdutoController.insertProduto)
        .put(ProdutoController.updateProduto)
    
    app.route('/produtos/:id')
        .get(ProdutoController.getProduto)
        .delete(ProdutoController.deleteProduto)
}