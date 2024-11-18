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
            console.log("Used phone button on mobile device.");
        } else {
            navigator.clipboard.writeText(phoneNumber);
            console.log("Used phone button on non-mobile device.");
        }
            
    } else if(buttonName == "email"){
        if(userUsingMobile === true){
            window.location.href = "mailto:${emailAddress}";
            console.log("Used Email button on mobile device.")
        } else {
            navigator.clipboard.writeText(emailAddress);
            console.log("Used Email button on non-mobile device.");
        }
    } else if(buttonName === "text"){
        if(userUsingMobile === true){
            window.location.href = "sms:${phoneNumber}";
            console.log("Used text button on mobile device")
        } else {
            navigator.clipboard.writeText(phoneNumber);
            console.log("Used text button on non-mobile device.");
        }
    } else{
        console.log("Your using a invaild paremeter.");
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