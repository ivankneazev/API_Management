export interface User{
    email:'string',
    password:"string",
    returnSecureToker?:boolean
}

export interface SerAuthResp {
    idToken:string,
    expiresIn:string
}