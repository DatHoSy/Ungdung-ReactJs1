const ACCESS_TOKEN = 'accessToken';
// window.onload = () => {
//     let tokenAcc = window.localStorage.getItem(ACCESS_TOKEN);
//     if (tokenAcc == undefined) {
//         window.location.assign('/');
//     }
// }

export const Logout = () => {
    window.localStorage.removeItem(ACCESS_TOKEN);
    window.location.assign('/');
}