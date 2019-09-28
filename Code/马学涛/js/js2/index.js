function validateForm() {
    var com = ['163', 'qq', 'sina', '126']
    var complan = { '163': '网易', 'sina': '新浪', '126': '网易', 'qq': '腾讯' }
    var email = document.forms["myForm"]["email"].value;
    testbox = document.getElementById('test');
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("不是一个有效的 e-mail 地址");
        return false;
    } else {
        emaillist = email.split(/[@.]/);
        if (com.includes(emaillist[1])) {
            testbox.innerHTML = '用户名：' + emaillist[0] + '<br>' + '公司名：' + complan[emaillist[1]];
            return false;
        } else if (com.includes(emaillist[2]) && emaillist[1] == 'vip') {
            testbox.innerHTML = '用户名：' + emaillist[0] + '<br>' + '公司名：' + complan[emaillist[2]];
            return false;
        } else {
            alert("不是一个有效的公司！");
            return false;
        }
    }
}