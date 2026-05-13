import { Request, Response } from "express";
import * as yup from "yup";

interface ICidade {
    nome: string;
}

const bodyvalidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3).max(50),
});

export const create = async (req: Request<ICidade>, res: Response) => {
    let validateData: ICidade | undefined = undefined;
    try {
        validateData = await bodyvalidation.validate(req.body);
    } catch (error) {
        const yupError = error as yup.ValidationError;
        return res.json({
            errors: {
                default: yupError.errors,
            }
        })
    }

    console.log(validateData);

    return res.send('create cidade');
}
