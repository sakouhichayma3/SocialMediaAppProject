import axios from 'axios'
const userService ={}

userService.register = function(data){
return axios.post('http://127.0.0.1:5000/users/signup', data)

}
userService.signin = function (data){
return axios.post('http://127.0.0.1:5000/users/signin', data)}


export default userService;