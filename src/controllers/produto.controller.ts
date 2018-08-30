import { Request, Response } from 'express';

import { Produto, IProduto } from '../models/produto.model';

export class ProdutoController {

    static getAllProdutos(req: Request, res: Response): void {
        Produto.find().exec().then(
            (produtos: IProduto[]) => res.status(200).json(produtos),
            (err: any) => res.status(500).json(err)
        )
    }

    static getProduto(req: Request, res: Response): void {
        Produto.findById(req.params.id).exec().then(
            (produto: IProduto) =>
                produto ?
                    res.status(200).json(produto) :
                    res.status(404).json("Produto não localizado"),
            (err: any) => res.status(500).json(err)
        )
    }

    static insertProduto(req: Request, res: Response): void {
        Produto.create(req.body).then(
            (produto: IProduto) => res.status(201).json(produto),
            (err: any) => res.status(500).json(err)
        )
    }

    static updateProduto(req: Request, res: Response): void {
        Produto.findOne({_id: req.body._id}).exec().then(
            (produto: IProduto) => {
                if (produto) {
                    produto.descricao = req.body.descricao;
                    produto.save((err: any) => {
                        (!err) ?
                            res.status(201).json({}) :
                            res.status(500).json(err);
                    })
                } else {
                    res.status(404).json('Produto não encontrado');
                }
            },
            (err: any) => res.status(500).json(err)
        )
    }


    static deleteProduto(req: Request, res: Response): void {
        Produto.findOne({ _id: req.params.id }).exec().then(
            (produto: IProduto) => {
                if (produto) {
                    produto.remove((err: any) => {
                        (!err) ?
                            res.status(204).json({}) :
                            res.status(500).json(err);
                    })
                } else {
                    res.status(404).json('Produto não encontrado');
                }
            },
            (err: any) => res.status(500).json(err)
        )
    }

}