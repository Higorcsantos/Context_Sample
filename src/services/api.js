import {departaments,users} from '../mock';

//Esse código serve para simular a chamada em uma api
export const getUsers = async() => {
    return new Promise(resolve => setTimeout(() => {
        resolve(users)
    },2000));
}
export const getDepartaments = async() => {
    return new Promise(resolve => setTimeout(() => {
        resolve(departaments);
    },1500))
}