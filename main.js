function getUserInfo() {
    let account_element = document.getElementById("account");
    let account = account_element.value;
    let password_element = document.getElementById("password");
    let password = account_element.value;
    alert("帳號：" + account + "\n密碼：" + password);
}