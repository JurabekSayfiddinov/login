import axios from "axios"

export const saveToken=(token,refresh)=>{
    localStorage.setItem('token',token)
    localStorage.setItem('refresh',refresh)
}
 
let getToken=()=>{
    return localStorage.getItem('token')
}

export const axiosRequest=axios.create({
    baseURL:import.meta.env.VITE_API
})

axiosRequest.interceptors.request.use(
    (config)=>{
        const token=getToken()
        
        if(token){
            config.headers['Authorization']=`Bearer ${token}`
        }
    }
)

axiosRequest.interceptors.response.use( 
    
)