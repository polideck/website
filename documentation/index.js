document.getElementsByClassName('heading')[0].addEventListener('click', () => {
    window.location.href = "../"
});

document.getElementsByClassName('pageButton')[2].addEventListener('click', () => {
    window.location.href = "../solutions"
});

document.getElementsByClassName('pageButton')[1].addEventListener('click', () => {
    window.location.href = "../documentation"
});

document.getElementsByClassName('pageButton')[0].addEventListener('click', () => {
    window.location.href = "../contact"
});

document.getElementsByClassName('loginButton')[0].addEventListener('click', () => {
    window.location.href = "http://localhost:8080/auth/realms/polideck/protocol/openid-connect/auth?client_id=account&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Frealms%2Fpolideck%2Faccount%2Flogin-redirect&state=0%2F7ab96341-cef4-4fda-9fef-eb5b0081ea40&response_type=code&scope=openid";
});