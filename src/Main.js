// Function checks if the device is a phone, table or other mobile device.
function checkDeviceDetails(){
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
    
    if(isMobile === true){
        return true;
    } else{
        return false;
    }
}

// Function checks which intro button is being used and redirects you based on the button.
function openIntroButton(buttonName){
    // All nessary varibles to make function work.
    const userUsingMobile = checkDeviceDetails();
    const phoneNumber = "";
    const emailAddress = "";

    // Checks what button is being used
    if(buttonName === "phone"){
        if(userUsingMobile === true){
            // Opens the dialer on phone with number already inputed.
            window.location.href = "tel:${phoneNumber}";
            console.log("Used phone button on mobile device.");
        } else {
            // Copys the phone number to the clipboard.
            navigator.clipboard.writeText(phoneNumber);
            console.log("Used phone button on non-mobile device.");
        }
            
    } else if(buttonName == "email"){
        if(userUsingMobile === true){
            // Opens the devices email app.
            window.location.href = "mailto:${emailAddress}";
            console.log("Used Email button on mobile device.")
        } else {
            // Copys the email address to the clipboard.
            navigator.clipboard.writeText(emailAddress);
            console.log("Used Email button on non-mobile device.");
        }
    } else if(buttonName === "text"){
        // Opens a new chat in messages to the phone number
        if(userUsingMobile === true){
            window.location.href = "sms:${phoneNumber}";
            console.log("Used text button on mobile device")
        } else {
            // Copys the phone number to the clipboard.
            navigator.clipboard.writeText(phoneNumber);
            console.log("Used text button on non-mobile device.");
        }
    } else{
        // Lets me know I have the buttons set up properely.
        console.log("Your using a invaild paremeter.");
    }
}

function openSocialLink(platform){
    // Checks with button was pressed.
    if (platform == 'Github') {
        // Opens my GitHub profile.
        window.open("https://github.com/KieranPritchard");
        console.log("Open GitHub");        
    } else if (platform == 'Linkedin'){
        // Opens my Linkedin profile.
        window.open("https://www.linkedin.com/in/kieran-pritchard-20278430b/");
        console.log("Open Linkedin");
    }
}