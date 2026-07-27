function trackButtonClick(){

    document.getElementById("message").innerHTML =
    "Button clicked!";

    // Custom Google Analytics event
    gtag('event', 'button_click', {
        event_category: 'engagement',
        event_label: 'Homepage Button'
    });

}
