function CheckLoginPageIsInnerPage() {//检查登陆页面是否是内页，如果是内页则调用top中的refresh()方法，此方法在登陆页面使用配合登陆后的框架页面中的refresh方法拒绝登陆页成为内页
    try {
        top.refresh();
        alert('登陆超时，请重新登陆！');
    }
    catch (e) { }
}