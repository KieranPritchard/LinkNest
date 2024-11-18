function checkDeviceDetails(){
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
    
    if(isMobile === true){
        return true
    } else{
        return false
    }
}

function openSocialLink(platform){
    if (platform == 'Github') {
        window.open("https://github.com/KieranPritchard")
        console.log("Open GitHub")        
    } else if (platform == 'Linkedin'){
        window.open("https://www.linkedin.com/in/kieran-pritchard-20278430b/")
        console.log("Open Linkedin")
    }
}