import { Document, Schema, Model, model } from 'mongoose';

export interface IProduto extends Document {
    descricao: string;
};

export const ProdutoSchema: Schema = new Schema({
    descricao: {
        type: String,
        uppercase: true,
        trim: true,
        required: [true, "É necessário preencher o campo 'Descrição do Produto'"],
        match: [/^[a-zA-ZÀ-Úà-ú]+/, "A descrição do produto deve conter apenas letras no início"],
        minlength: [2, 'A descrição do produto precisa conter no mínimo {MINLENGTH} caracteres'],
        maxlength: [100, 'A descrição do produto deve conter no máximo {MAXLENGTH} caracteres']
    }
});

export const Produto: Model<IProduto> = model<IProduto>('Produto', ProdutoSchema);
