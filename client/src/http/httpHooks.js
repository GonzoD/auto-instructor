import {$host} from './index'

export const getComments = async () => {
    const {data} = await $host.get('api/comments/get')
    return data
}

export const createComments = async (name, text) => {
    const {data} = await $host.post('api/comments/create', {name, text})
    return data
}