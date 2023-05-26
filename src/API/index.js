const ACCESS_TOKEN = 'accessToken';
// window.onload = () => {
//     let tokenAcc = window.localStorage.getItem(ACCESS_TOKEN);
//     if (tokenAcc != undefined) {
//         window.location.assign('/home');
//     }
// }

const loginApi = async (user, passw) => {
    return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: user,
            password: passw,
        })
    })
    .then(res => res.json());
}

export const Login = async () => {
    let user = document.getElementById('user').value;
    let passw = document.getElementById('passw').value;
    let result = await loginApi(user, passw);
    if (result.token != undefined) {
        window.localStorage.setItem(ACCESS_TOKEN, result.token);
        return window.location.assign('/home');
    }
    alert('Account not found!');
}

export const Logout = () => {
    window.localStorage.removeItem(ACCESS_TOKEN);
    window.location.assign('/');
}