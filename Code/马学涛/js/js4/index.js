function validateForm() {
    var email = document.forms['myForm']['email'].value;
    var phone = document.forms['myForm']['phone'].value;
    var isPhone = /[1][3|4|5|7|8][0-9]{9}/.test(phone);
    var isemail = /[A-Za-z0-9]{1,20}\@(qq|126|163|139|sina)\.(com|cn)/.test(email);
    if (isPhone && isemail) {
        alert("验证成功符合语法规范!");
    } else {
        if (!isPhone && isemail) {
            alert("手机格式不正确!");
        } else if (isPhone && !isemail) {
            alert("邮箱格式不正确!")
        } else {
            alert("手机与邮箱均不正确!");
        }
    }
    return false;
}