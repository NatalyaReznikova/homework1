describe('Main Page', function ()  {
    it('should Title main page is present and correct text', function () {
     browser.url('https://stage.pasv.us/');
     const titleProgressMonitor = $("//span[@id='site-name']");
     const text = titleProgressMonitor.getText();//Progress Monitor
     expect(text).toEqual('Progress Monitor');
    });
    it('should Title main page isclickable',function () {
        const titleProgressMonitor = "//span[@id='site-name']";
        const result = $(titleProgressMonitor).isClickable();//True False
        expect(result).toEqual(true);
    })
    it('should verify that Login button is clicable',function () {
        const loginBtn = $("//a[@qa='login-link']");
        const result = loginBtn.isClickable();
        expect(result).toEqual(true);

    })
    it('should verify that Login button',function () {
        const loginBtn = $("//a[@qa='login-link']");
        const textOfLoginBtn = loginBtn.getText();
        expect(textOfLoginBtn).toEqual('Login');

    })
});