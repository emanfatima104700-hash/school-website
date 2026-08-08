/* =====================================================
   BRIGHT FUTURE SCHOOL
   COMPLETE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. SMOOTH SCROLLING
       Footer / navbar ke #about, #courses etc. links
       properly section par le jayenge.
    ===================================================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId === "#!"
            ) {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* =====================================================
       2. NAVBAR ACTIVE LINK
       Jis section par user hoga uska navbar link active hoga.
    ===================================================== */

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* =====================================================
       3. SCROLL TO TOP BUTTON
       JavaScript automatically button create karega.
    ===================================================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

    topButton.className = "scroll-top";

    topButton.setAttribute("aria-label", "Scroll to top");

    document.body.appendChild(topButton);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }

    });


    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       4. READ MORE BUTTON
    ===================================================== */

    const readMoreButton = document.querySelector(
        '.about-text .btn'
    );

    if (readMoreButton) {

        readMoreButton.addEventListener("click", function (e) {

            e.preventDefault();

            const aboutSection = document.querySelector(".about-container");

            if (aboutSection) {

                aboutSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        });

    }


    /* =====================================================
       5. COURSE "LEARN MORE" BUTTONS
    ===================================================== */

    const courseButtons = document.querySelectorAll(
        ".course-card .btn"
    );

    courseButtons.forEach(function (button) {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            const card = this.closest(".course-card");

            if (!card) return;

            const courseName =
                card.querySelector("h3")?.textContent.trim();

            if (courseName) {

                alert(
                    "Thank you for your interest in " +
                    courseName +
                    "!\n\nOur admission team will provide you with more information."
                );

            }

        });

    });


    /* =====================================================
       6. CONTACT FORM
       Tumhari HTML contact form ko handle karega.
    ===================================================== */

    const contactForm = document.querySelector(
        ".contact-container form"
    );

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                contactForm.querySelector(
                    'input[placeholder="Your Name"]'
                );

            const email =
                contactForm.querySelector(
                    'input[placeholder="Your Email"]'
                );

            const subject =
                contactForm.querySelector(
                    'input[placeholder="Subject"]'
                );

            const message =
                contactForm.querySelector("textarea");


            if (!name || !email || !message) {
                return;
            }


            if (name.value.trim() === "") {

                alert("Please enter your name.");

                name.focus();

                return;

            }


            if (email.value.trim() === "") {

                alert("Please enter your email.");

                email.focus();

                return;

            }


            if (message.value.trim() === "") {

                alert("Please enter your message.");

                message.focus();

                return;

            }


            alert(
                "Thank you, " +
                name.value.trim() +
                "!\n\nYour message has been submitted successfully."
            );


            contactForm.reset();

        });

    }


    /* =====================================================
       7. GALLERY IMAGE CLICK
       Gallery image par click karne se large image popup.
    ===================================================== */

    const galleryImages = document.querySelectorAll(
        ".gallery-container img"
    );


    if (galleryImages.length > 0) {

        const lightbox = document.createElement("div");

        lightbox.className = "image-lightbox";

        lightbox.innerHTML = `
            <button class="lightbox-close">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <img src="" alt="Gallery Preview">
        `;

        document.body.appendChild(lightbox);


        const lightboxImage =
            lightbox.querySelector("img");

        const closeButton =
            lightbox.querySelector(".lightbox-close");


        galleryImages.forEach(function (image) {

            image.style.cursor = "pointer";

            image.addEventListener("click", function () {

                lightboxImage.src = this.src;

                lightboxImage.alt = this.alt;

                lightbox.classList.add("active");

                document.body.style.overflow = "hidden";

            });

        });


        closeButton.addEventListener("click", closeLightbox);


        lightbox.addEventListener("click", function (e) {

            if (e.target === lightbox) {
                closeLightbox();
            }

        });


        function closeLightbox() {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }


        document.addEventListener("keydown", function (e) {

            if (e.key === "Escape") {
                closeLightbox();
            }

        });

    }


    /* =====================================================
       8. TEACHER SOCIAL ICONS
    ===================================================== */

    const teacherSocialLinks =
        document.querySelectorAll(
            ".teacher-card .social-icons a"
        );


    teacherSocialLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            alert(
                "Teacher social profile will be available soon."
            );

        });

    });


    /* =====================================================
       9. FOOTER SOCIAL ICONS
    ===================================================== */

    const footerSocialLinks =
        document.querySelectorAll(
            ".footer-social a"
        );


    footerSocialLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            alert(
                "Our social media page will be available soon."
            );

        });

    });


    /* =====================================================
       10. NUMBER COUNTER
       Achievement numbers scroll par animation ke sath count honge.
    ===================================================== */

    const achievementBoxes =
        document.querySelectorAll(
            ".achievement-box"
        );


    let counterStarted = false;


    function startCounters() {

        if (counterStarted) return;

        counterStarted = true;


        achievementBoxes.forEach(function (box) {

            const numberElement =
                box.querySelector("h2");

            if (!numberElement) return;


            const originalText =
                numberElement.textContent.trim();


            const number =
                parseInt(
                    originalText.replace(/\D/g, ""),
                    10
                );


            if (isNaN(number)) return;


            const suffix =
                originalText.replace(/[0-9,]/g, "");


            let current = 0;

            const duration = 1800;

            const intervalTime = 30;

            const increment =
                number /
                (duration / intervalTime);


            const counter =
                setInterval(function () {

                    current += increment;


                    if (current >= number) {

                        current = number;

                        clearInterval(counter);

                    }


                    numberElement.textContent =
                        Math.floor(current).toLocaleString() +
                        suffix;

                }, intervalTime);

        });

    }


    const achievementSection =
        document.querySelector(
            ".achievement-container"
        );


    if (achievementSection) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            startCounters();

                        }

                    });

                },
                {
                    threshold: 0.3
                }
            );


        observer.observe(achievementSection);

    }


    /* =====================================================
       11. CARD SCROLL ANIMATION
       Cards screen par aane par visible honge.
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".feature-box, .course-card, .teacher-card, .testimonial-card, .achievement-box"
        );


    const animationObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        animationObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(function (element) {

        element.classList.add("js-animation");

        animationObserver.observe(element);

    });


    /* =====================================================
       12. BUTTON CLICK EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn"
        );


    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.classList.add("clicked");


            setTimeout(function () {

                button.classList.remove("clicked");

            }, 200);

        });

    });


    /* =====================================================
       13. PAGE LOADED MESSAGE
       Console mein check karne ke liye.
    ===================================================== */

    console.log(
        "Bright Future School JavaScript loaded successfully!"
    );

});