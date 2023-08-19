const {todo} = require("../models");
const todo = require("../models/todo");
class todo{
    static findListAll = async (req, res, next) =>{
        try{
            const todo = await todo.findListAll();

            res.status(200).json(todo);
        }catch(err){
            next(err);
        }
    }

    static findDetail = async (req, res, next) =>{
        try{
            const todo = await todo.findDetail();

            res.status(200).json(todo);
        }catch(err){
            next(err);
        }
    }

    static create = async (req, res, next) =>{
        try{
            const {tittle} = req.body;

        await todo.create({
            tittle
        })
        }catch(err){
            next(err);
        }
    }

    static delete = async (req, res, next) =>{
        try{
            const todo = await todo.dele();

            res.status(200).json(todo);
        }catch(err){
            next(err);
        }
    }

}
module.exports = todo;