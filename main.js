// =====================================================
// MAIN JS - BIRTHDAY FLOWERS
// =====================================================

window.addEventListener("load", () => {

    console.log("MAIN JS OK");

    // =================================================
    // KHỞI TẠO
    // =================================================

    createFireflies();
    createIntroFireflies();
    setupLetter();


    // =================================================
    // LẤY CÁC PHẦN TỬ
    // =================================================

    const openScreen =
        document.getElementById("open-screen");

    const openButton =
        document.getElementById("open-button");

    const music =
        document.getElementById("bg-music");


    // =================================================
    // KIỂM TRA NÚT OPEN
    // =================================================

    if (!openButton) {

        console.log(
            "KHÔNG TÌM THẤY OPEN BUTTON"
        );

        return;
    }


    // =================================================
    // CLICK OPEN
    // =================================================

    openButton.addEventListener("click", () => {

        console.log("🌸 CLICK OPEN");


        // ---------------------------------------------
        // HIỆN NỘI DUNG CHÍNH
        // ---------------------------------------------

        document.body.classList.remove(
            "not-loaded"
        );


        // ---------------------------------------------
        // TẠO CHỮ + ẢNH BAY
        // ---------------------------------------------

        createBirthdayItems();


        // ---------------------------------------------
        // PHÁT NHẠC
        // Fade từ 0 → 50% trong 5 giây
        // ---------------------------------------------

        if (music) {

            music.currentTime = 0;
            music.volume = 0;

            const playPromise =
                music.play();

            if (playPromise !== undefined) {

                playPromise
                    .then(() => {

                        const targetVolume = 0.5;
                        const fadeDuration = 5000;

                        const fadeStart =
                            Date.now();


                        function fadeInMusic() {

                            const elapsed =
                                Date.now() - fadeStart;

                            const progress =
                                Math.min(
                                    elapsed /
                                        fadeDuration,
                                    1
                                );


                            music.volume =
                                targetVolume *
                                progress;


                            if (progress < 1) {

                                requestAnimationFrame(
                                    fadeInMusic
                                );

                            }

                        }


                        fadeInMusic();

                    })

                    .catch(() => {

                        console.log(
                            "Chrome đang chặn nhạc."
                        );

                    });

            }

        }


        // ---------------------------------------------
        // HIỆU ỨNG HẠT GIỐNG
        // ---------------------------------------------

        const seed =
            document.querySelector(
                ".magic-seed"
            );


        if (seed) {

            seed.classList.add(
                "seed-opening"
            );

        }


        // ---------------------------------------------
        // ĐÓNG INTRO
        // ---------------------------------------------

        setTimeout(() => {

            if (openScreen) {

                openScreen.classList.add(
                    "opened"
                );

            }

        }, 400);


        // ---------------------------------------------
        // HOA NỞ XONG
        // SAU ĐÓ HIỆN PHONG THƯ
        // ---------------------------------------------

        setTimeout(() => {

            const letterSection =
                document.getElementById(
                    "letter-section"
                );


            if (letterSection) {

                letterSection.classList.add(
                    "show"
                );

            }

        }, 8500);

    });

});


// =====================================================
// FIREFLIES Ở MÀN HÌNH CHÍNH
// =====================================================

function createFireflies() {

    const night =
        document.querySelector(".night");


    if (!night) {

        console.log(
            "KHÔNG TÌM THẤY .night"
        );

        return;
    }


    // Không tạo lại nếu đã có
    if (
        night.querySelector(".firefly")
    ) {

        return;

    }


    // Tạo 40 fireflies

    for (let i = 40; i--;) {

        const firefly =
            document.createElement("div");


        firefly.className =
            "firefly";


        // ---------------------------------------------
        // VỊ TRÍ RANDOM
        // ---------------------------------------------

        firefly.style.left =
            (
                10 +
                Math.random() * 80
            ) + "%";


        firefly.style.top =
            (
                8 +
                Math.random() * 75
            ) + "%";


        // ---------------------------------------------
        // ANIMATION RANDOM
        // ---------------------------------------------

        firefly.style.animationDelay =
            (
                -Math.random() * 4
            ) + "s";


        firefly.style.animationDuration =
            (
                3.5 +
                Math.random() * 2
            ) + "s";


        night.appendChild(
            firefly
        );

    }

}


// =====================================================
// FIREFLIES Ở MÀN HÌNH INTRO
// =====================================================

function createIntroFireflies() {

    const container =
        document.getElementById(
            "intro-fireflies"
        );


    if (!container) {

        console.log(
            "KHÔNG TÌM THẤY #intro-fireflies"
        );

        return;
    }


    // Tạo 18 fireflies

    for (let i = 18; i--;) {

        const firefly =
            document.createElement("div");


        firefly.className =
            "intro-firefly";


        // ---------------------------------------------
        // VỊ TRÍ RANDOM
        // ---------------------------------------------

        firefly.style.left =
            (
                15 +
                Math.random() * 70
            ) + "%";


        firefly.style.top =
            (
                12 +
                Math.random() * 70
            ) + "%";


        // ---------------------------------------------
        // ANIMATION RANDOM
        // ---------------------------------------------

        firefly.style.animationDelay =
            (
                -Math.random() * 5
            ) + "s";


        container.appendChild(
            firefly
        );

    }

}


// =====================================================
// TẠO CHỮ + ẢNH BAY
// =====================================================

function createBirthdayItems() {

    const container =
        document.querySelector(
            ".falling-items"
        );


    if (!container) {

        console.log(
            "KHÔNG TÌM THẤY .falling-items"
        );

        return;
    }


    // Không tạo lại nếu đã có

    if (
        container.children.length > 0
    ) {

        return;

    }


    // =================================================
    // CÁC CÂU CHỮ
    // =================================================

    const messages = [

        "Thương em ♡",

        "Always with you",

        "My heart belongs to you",

        "Sẽ mãi yêu em",

        "Thương em nhiều",

        "You are special"

    ];


    // =================================================
    // MÀU CHỮ
    // =================================================

    const colors = [

        "#78e8ff",

        "#ff9fce",

        "#ffc078",

        "#c9a0ff"

    ];


    // =================================================
    // TẠO CÁC CÂU CHỮ
    // =================================================

    messages.forEach(
        (text, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "birthday-floating-text";


            item.textContent =
                text;


            // -----------------------------------------
            // VỊ TRÍ RANDOM
            // -----------------------------------------

            item.style.left =
                (
                    5 +
                    Math.random() * 70
                ) + "%";


            // -----------------------------------------
            // DELAY
            // -----------------------------------------

            item.style.animationDelay =
                (
                    index * 1.8
                ) + "s";


            // -----------------------------------------
            // RANDOM MÀU
            // -----------------------------------------

            const color =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];


            item.style.color =
                color;


            item.style.textShadow =
                `0 0 6px ${color},
                 0 0 12px ${color}`;


            container.appendChild(
                item
            );

        }
    );


    // =================================================
    // DANH SÁCH ẢNH
    // =================================================

    const photos = [

        "photo1.jpg",

        "photo2.jpg",

        "photo3.jpg",

        "photo4.jpg",

        "photo5.jpg"

    ];


    // =================================================
    // RANDOM VỊ TRÍ ẢNH
    // =================================================

    function randomPhotoPosition(image) {

        const isMobile =
            window.innerWidth <= 600;


        // ---------------------------------------------
        // MOBILE
        // ---------------------------------------------

        if (isMobile) {

            const maxLeft =
                Math.max(
                    10,
                    window.innerWidth - 155
                );


            image.style.left =
                (
                    10 +
                    Math.random() *
                    Math.max(
                        20,
                        maxLeft - 10
                    )
                ) + "px";

        }


        // ---------------------------------------------
        // DESKTOP
        // ---------------------------------------------

        else {

            image.style.left =
                (
                    5 +
                    Math.random() * 70
                ) + "%";

        }

    }


    // =================================================
    // TẠO CÁC ẢNH
    // =================================================

    photos.forEach(
        (src, index) => {

            const image =
                document.createElement(
                    "img"
                );


            image.className =
                "birthday-floating-photo";


            image.src =
                src;


            image.alt =
                "";


            // -----------------------------------------
            // NẾU ẢNH KHÔNG TỒN TẠI
            // → XÓA ẢNH
            // -----------------------------------------

            image.onerror = () => {

                console.log(
                    "Không tìm thấy ảnh:",
                    src
                );


                image.remove();

            };


            // -----------------------------------------
            // RANDOM VỊ TRÍ LẦN ĐẦU
            // -----------------------------------------

            randomPhotoPosition(
                image
            );


            // -----------------------------------------
            // RANDOM DELAY
            // -----------------------------------------

            image.style.animationDelay =
                (
                    Math.random() * 8
                ) + "s";


            // -----------------------------------------
            // MỖI LẦN ANIMATION XONG
            // → RANDOM VỊ TRÍ MỚI
            // -----------------------------------------

            image.addEventListener(
                "animationiteration",
                () => {

                    randomPhotoPosition(
                        image
                    );

                }
            );


            container.appendChild(
                image
            );

        }
    );

}


// =====================================================
// LÁ THƯ TÂM TÌNH
// =====================================================

function setupLetter() {

    const openLetter =
        document.getElementById(
            "open-letter"
        );


    const closeLetter =
        document.getElementById(
            "close-letter"
        );


    const letter =
        document.getElementById(
            "letter"
        );


    const letterSection =
        document.getElementById(
            "letter-section"
        );


    const heartBackground =
        document.getElementById(
            "heart-background"
        );


    // =================================================
    // KIỂM TRA
    // =================================================

    if (
        !openLetter ||
        !closeLetter ||
        !letter ||
        !letterSection ||
        !heartBackground
    ) {

        console.log(
            "KHÔNG TÌM THẤY LETTER"
        );

        return;

    }


    // =================================================
    // TẠO TIM BACKGROUND
    // =================================================

    function createHeartBackground() {

        // Không tạo lại nếu đã có tim

        if (
            heartBackground.children.length > 0
        ) {

            return;

        }


        // Số lượng tim

        const heartCount = 48;


        for (
            let i = 0;
            i < heartCount;
            i++
        ) {

            const heart =
                document.createElement(
                    "span"
                );


            heart.className =
                "background-heart";


            // -----------------------------------------
            // TIM MỜ / TIM RÕ
            // -----------------------------------------

            if (i % 3 === 0) {

                heart.classList.add(
                    "soft"
                );

            } else {

                heart.classList.add(
                    "strong"
                );

            }


            // -----------------------------------------
            // HÌNH TRÁI TIM
            // -----------------------------------------

            heart.textContent =
                "♥";


            // -----------------------------------------
            // KÍCH THƯỚC
            // -----------------------------------------

            const size =
                Math.random() * 45 + 18;


            // -----------------------------------------
            // VỊ TRÍ
            // -----------------------------------------

            const x =
                Math.random() * 110 - 55;


            const y =
                Math.random() * 110 - 55;


            // -----------------------------------------
            // ĐỘ TRONG SUỐT
            // -----------------------------------------

            const opacity =
                Math.random() * 0.35 + 0.45;


            // -----------------------------------------
            // GÓC XOAY
            // -----------------------------------------

            const rotate =
                Math.random() * 30 - 15;


            // -----------------------------------------
            // DELAY
            // -----------------------------------------

            const delay =
                Math.random() * 0.9;


            // -----------------------------------------
            // CSS VARIABLES
            // -----------------------------------------

            heart.style.setProperty(
                "--heart-size",
                `${size}px`
            );


            heart.style.setProperty(
                "--heart-x",
                `${x}vw`
            );


            heart.style.setProperty(
                "--heart-y",
                `${y}vh`
            );


            heart.style.setProperty(
                "--heart-opacity",
                opacity
            );


            heart.style.setProperty(
                "--heart-rotate",
                `${rotate}deg`
            );


            heart.style.setProperty(
                "--heart-delay",
                `${delay}s`
            );


            heartBackground.appendChild(
                heart
            );

        }

    }


    // =================================================
    // CLICK PHONG THƯ
    // =================================================

    openLetter.addEventListener(
        "click",
        () => {

            console.log(
                "💌 CLICK MỞ THƯ"
            );


            // -----------------------------------------
            // TẠO BACKGROUND TIM
            // -----------------------------------------

            createHeartBackground();


            // -----------------------------------------
            // BẬT CHẾ ĐỘ TIM
            // -----------------------------------------

            letterSection.classList.add(
                "heart-mode"
            );


            // -----------------------------------------
            // PHONG THƯ MỞ
            // -----------------------------------------

            openLetter.classList.add(
                "opening"
            );


            // -----------------------------------------
            // SAU KHI TIM BUNG RA
            // → HIỆN LÁ THƯ
            // -----------------------------------------

            setTimeout(() => {

                letter.classList.add(
                    "open"
                );


                openLetter.style.opacity =
                    "0";


                openLetter.style.pointerEvents =
                    "none";


            }, 1100);

        }
    );


    // =================================================
    // ĐÓNG LÁ THƯ
    // =================================================

    closeLetter.addEventListener(
        "click",
        (event) => {

            console.log(
                "❌ ĐÃ CLICK NÚT X"
            );


            // Không cho click xuyên ra sau

            event.preventDefault();

            event.stopPropagation();


            // -----------------------------------------
            // ĐÓNG LÁ THƯ
            // -----------------------------------------

            letter.classList.remove(
                "open"
            );


            // -----------------------------------------
            // RESET PHONG THƯ
            // -----------------------------------------

            openLetter.classList.remove(
                "opening"
            );


            // -----------------------------------------
            // TẮT NỀN TIM
            // -----------------------------------------

            letterSection.classList.remove(
                "heart-mode"
            );


            // -----------------------------------------
            // HIỆN LẠI PHONG THƯ
            // -----------------------------------------

            setTimeout(() => {

                openLetter.style.opacity =
                    "1";


                openLetter.style.pointerEvents =
                    "auto";


            }, 700);

        }
    );

}