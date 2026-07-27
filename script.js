function trackButtonClick() {

    document.getElementById("message").innerHTML =
        "Button clicked successfully!";


    // Google Analytics custom event

    if (typeof gtag === "function") {

        gtag('event', 'button_click', {

            event_category: 'engagement',

            event_label: 'Homepage Button'

        });

    }

}
