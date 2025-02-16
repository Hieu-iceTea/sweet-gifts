// https://codepen.io/2W-the-sasster/pen/LYvyYOj

// Config:
const heightOfActiveOnMobile = {
    0: '225%',
    1: '255%',
    2: '305%',
}

const heightOfActiveOnTablet = {
    0: '145%',
    1: '145%',
    2: '190%',
}

const heightOfActiveOnPC = {
    0: '100%',
    1: '105%',
    2: '140%',
}

//Variables
let mobile_media_query = window.matchMedia("(max-width: 400px)");
let tablet_media_query = window.matchMedia(
    "(min-width: 400px) and (max-width: 600px)"
);
const notes = document.querySelectorAll(".js-note");

//-> Function that resets the size of the notes.
function recize_notes() {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].classList.contains("active")) {
            notes[i].classList.remove("active");
            gsap.set(notes[i], {
                height: "30%",
                clearProps: "all"
            });
        }
    }
}

//-> Main function that enables all the notes.
function notes_ready() {
    gsap.to(".js-envelop-content", {
        height: "110%",
        duration: 0.5
    });

    for (let i = 0; i < notes.length; i++) {
        notes[i].addEventListener("click", function () {
            if (mobile_media_query.matches) {
                if (this.classList.contains("active")) {
                    this.classList.remove("active");
                    gsap.set(this, {
                        height: "30%",
                        clearProps: "all"
                    });
                } else {
                    for (let i = 0; i < notes.length; i++) {
                        if (notes[i].classList.contains("active")) {
                            notes[i].classList.remove("active");
                            gsap.set(notes[i], {
                                height: "30%",
                                clearProps: "all"
                            });
                        }
                    }
                    this.classList.add("active");
                    console.log(i)
                    gsap.set(this, {
                        height: heightOfActiveOnMobile[i]
                    });
                }
            } else if (tablet_media_query.matches) {
                if (this.classList.contains("active")) {
                    this.classList.remove("active");
                    gsap.set(this, {
                        height: "30%",
                        clearProps: "all"
                    });
                } else {
                    for (let i = 0; i < notes.length; i++) {
                        if (notes[i].classList.contains("active")) {
                            notes[i].classList.remove("active");
                            gsap.set(notes[i], {
                                height: "30%",
                                clearProps: "all"
                            });
                        }
                    }
                    this.classList.add("active");
                    gsap.set(this, {
                        height: heightOfActiveOnTablet[i]
                    });
                }
            } else {
                if (this.classList.contains("active")) {
                    this.classList.remove("active");
                    gsap.set(this, {
                        height: "30%",
                        clearProps: "all"
                    });
                } else {
                    for (let i = 0; i < notes.length; i++) {
                        if (notes[i].classList.contains("active")) {
                            notes[i].classList.remove("active");
                            gsap.set(notes[i], {
                                height: "30%",
                                clearProps: "all"
                            });
                        }
                    }
                    this.classList.add("active");
                    gsap.set(this, {
                        height: heightOfActiveOnPC[i]
                    });
                }
            }
        });
    }
}

//-> Function that set up the up paper of the envelope.
function set_up_paper() {
    var arr = [0, 0, 100, 0, 50, 61];
    gsap.set(".js-up-paper", {
        bottom: "97%",
        rotation: 180,
        zIndex: 200,
        clipPath:
            "polygon(" +
            arr[0] +
            "%" +
            arr[1] +
            "%," +
            arr[2] +
            "%" +
            arr[3] +
            "%," +
            arr[4] +
            "%" +
            arr[5] +
            "%)",
        onComplete: notes_ready
    });
}

//-> Function that starts the up paper transition.
function envelop_transition() {
    gsap.to(".js-up-paper", {
        bottom: "1%",
        duration: 0.25,
        onComplete: set_up_paper
    });
    document
        .querySelector(".js-up-paper")
        .removeEventListener("click", envelop_transition);
    document.querySelector(".js-up-paper").classList.remove("cursor");
}

//-> Function that allows cut the sticker.
function sticker() {
    gsap.set(".js-sticker", { width: "20%", left: "-80%" });
    document.body.classList.remove("scissors");
    document.querySelector(".js-sticker").removeEventListener("click", sticker);
    document
        .querySelector(".js-up-paper")
        .addEventListener("click", envelop_transition);
    document.querySelector(".js-up-paper").classList.add("cursor");
}

document.querySelector(".js-sticker").addEventListener("click", sticker);

window.onresize = function (event) {
    recize_notes();
};
