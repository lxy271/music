import { get, post } from '@/api/recommend.js'

export const ERR_OK = 0

export const apiAddress = p => post('/search', p);