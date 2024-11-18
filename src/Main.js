function checkDeviceDetails(){
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
    
    if(isMobile === true){
        return true;
    } else{
        return false;
    }
}

function openIntroButton(buttonName){
    const userUsingMobile = checkDeviceDetails();
    const phoneNumber = "";
    const emailAddress = "";

    if(buttonName === "phone"){
        if(userUsingMobile === true){
            window.location.href = "tel:${phoneNumber}";
        } else {
            navigator.clipboard.writeText(phoneNumber);
        }
            
    } else if(buttonName == "email"){
        if(userUsingMobile === true){
            window.location.href = "mailto:${emailAddress}";
        } else {
            navigator.clipboard.writeText(emailAddress);
        }
    } else if(buttonName === "text"){
        if(userUsingMobile === true){
            window.location.href = "sms:${phoneNumber}";
        } else {
            navigator.clipboard.writeText(phoneNumber);
        }
    }
}

function openSocialLink(platform){
    if (platform == 'Github') {
        window.open("https://github.com/KieranPritchard");
        console.log("Open GitHub");        
    } else if (platform == 'Linkedin'){
        window.open("https://www.linkedin.com/in/kieran-pritchard-20278430b/");
        console.log("Open Linkedin");
    }
}