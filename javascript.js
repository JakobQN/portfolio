document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".top-menu a");
    const currentPage = window.location.pathname.split("/").pop(); // Get current file name

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        }
    });
});




window.addEventListener('scroll', function() {
    var topMenu = document.querySelector('.top-menu');
    
    if (window.scrollY > 50) { // Change background after 50px scroll
        topMenu.classList.add('scrolled');
    } else {
        topMenu.classList.remove('scrolled');
    }
});


document.addEventListener("scroll", function() {
    let titleText = document.querySelector(".title-text");
    let scrollY = window.scrollY;
    let fadePoint = 100; // Adjust this value for when the fade starts

    // Calculate opacity based on scroll position
    let opacity = Math.max(1 - scrollY / fadePoint, 0);
    titleText.style.opacity = opacity;
});

document.addEventListener("scroll", function() {
    let titleText = document.querySelector(".title-text-resume");
    let scrollY = window.scrollY;
    let fadePoint = 100; // Adjust this value for when the fade starts

    // Calculate opacity based on scroll position
    let opacity = Math.max(1 - scrollY / fadePoint, 0);
    titleText.style.opacity = opacity;
});

ddocument.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".Kontakt-Button");
    const footer = document.querySelector(".footer");
    const footerOffset = 10; // Abstand von 10px zum Footer, wenn der Button fixiert bleibt

    function updateButtonPosition() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        const footerHeight = footer.offsetHeight; // Höhe des Footers
        const buttonHeight = button.offsetHeight; // Höhe des Buttons

        // Berechne die Position, an der der Button fixiert bleiben soll (10px vor dem Footer)
        const stopPosition = documentHeight - footerHeight - footerOffset - buttonHeight;

        // Solange der Scrollwert kleiner als der Stop-Wert ist, bleibt der Button fixiert
        if (scrollY < stopPosition) {
            button.style.position = "fixed";
            button.style.bottom = "10%"; // Standardposition, bleibt 10% vom unteren Rand entfernt
            button.style.right = "5%";
        } else {
            // Wenn der Stop-Punkt erreicht ist, fixieren wir den Button genau 10px vor dem Footer
            button.style.position = "fixed";
            button.style.bottom = `${footerOffset}px`; // Fixiert 10px vor dem Footer
            button.style.right = "5%";
        }
    }

    window.addEventListener("scroll", updateButtonPosition);
    updateButtonPosition(); // Initiale Position setzen
});

 function sendEmail(event) {
    alert("Senden von Emails momentan nicht möglich")
    //  event.preventDefault(); // Verhindert das automatische Absenden des Formulars

    //  let parms = {
    //      anrede: document.getElementById("anrede").value,
    //      name: document.getElementById("name").value,
    //      email: document.getElementById("email").value,
    //      nachricht: document.getElementById("nachricht").value,
    //  };

    //  // E-Mail senden mit EmailJS
    //  emailjs.send("service_vf2pjpe", "template_xm8y0h4", parms)
    //      .then(function(response) {
    //          alert("E-Mail erfolgreich gesendet!"); // Erfolgsmeldung erst nach erfolgreichem Versand
    //          document.querySelector("form").reset(); // Formular zurücksetzen
    //      })//         .catch(function(error) {
    //          alert("Fehler beim Senden der E-Mail: " + error);
    //      });
 }


    