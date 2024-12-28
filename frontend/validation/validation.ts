import * as Yap from 'yup'

export const RegisterSchema= Yap.object({
    name:Yap.string().required("Name is Required"),
    email:Yap.string().required("Email Is Required").email("Email is invalid"),
    phone:Yap.string().required("Phone is Required"),
    password:Yap.string().required("Password is Required"),
    confirmed_password:Yap.string().required("Confirm Password is Required").oneOf([Yap.ref("password")])
})

export const LoginSchema = Yap.object({
    email:Yap.string().required("Email is required").email("Email is Invalid"),
    password:Yap.string().required("Password is Required")
})

export const UpdateSchema = Yap.object({
    name:Yap.string().required("Name is Required"),
    email:Yap.string().required("Email is Required").email("Inavlid Email"),
    address:Yap.string().required("Address is Required"),
    phone:Yap.string().required("Phone is Required"),
})