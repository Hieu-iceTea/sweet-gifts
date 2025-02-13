$(document).ready(function () {
    const timeLoveStarted = '2024-11-14T20:30:00'
    const timeToMeetOnValentineDay = '2025-02-14T17:30:00'

    let isShowTextCenter = false;
    let canShowTotalLovedTimerDiv = ((new Date('2025-02-16T00:00:00')) - (new Date())) < 0;
    let canShowCountdownToMeetDiv = ((new Date('2025-02-14T19:00:00')) - (new Date())) > 0;
    let canShowTotalMeetTimerDiv = ((new Date('2025-02-14T19:00:00')) - (new Date())) < 0;

    calculatorTimers();
    setInterval(() => {
        calculatorTimers();
    }, 1000);

    showTotalLovedTimerDiv();

    function countdown(targetTime) {
        const now = new Date();
        const target = new Date(targetTime);
        const diff = target - now;

        if (diff <= 0) {
            return "00:00:00";
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    function getTotalTime(targetTime) {
        const now = new Date();
        const target = new Date(targetTime);
        const diff = now - target;

        if (diff <= 0) {
            return "00:00:00";
        }

        const totalSeconds = Math.floor(diff / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);

        const hours = totalHours;
        const minutes = totalMinutes % 60;
        const seconds = totalSeconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    function getTotalDateTime(targetTime) {
        const now = new Date();
        const target = new Date(targetTime);
        const diff = now - target;

        if (diff <= 0) {
            return "00:00:00 · 0 ngày 0 tháng";
        }

        const totalSeconds = Math.floor(diff / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);
        const totalMonths = Math.floor(totalDays / 30);

        const hours = totalHours % 24;
        const minutes = totalMinutes % 60;
        const seconds = totalSeconds % 60;
        const days = totalDays % 30;
        const months = totalMonths;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds} · ${days} ngày ${months} tháng`;
    }

    function showTotalLovedTimerDiv() {
        if (canShowTotalLovedTimerDiv) {
            $(".total-timer-div").fadeIn("slow");
        }
    }

    function showCountdownDiv() {
        if (canShowCountdownToMeetDiv) {
            $(".countdown-div").fadeIn("slow");
        }
    }

    function showTotalMeetTimerDiv() {
        if (canShowTotalMeetTimerDiv) {
            $(".total-meet-timer-div").fadeIn("slow");
        }
    }

    function showTextCenter() {
        $(".text-center").fadeIn("slow");
        isShowTextCenter = true;
    }

    function hideTextCenter() {
        $(".text-center").fadeOut("slow");
        isShowTextCenter = false;
    }

    function calculatorTimer() {
        const timeLeft = countdown(timeToMeetOnValentineDay);

        $(".countdown-timer-text").text(timeLeft);
    }

    function calculatorTotalLovedTime() {
        const totalTime = getTotalDateTime(timeLoveStarted);

        $(".total-timer-text").text(totalTime);
    }

    function calculatorTotalMeetTime() {
        const totalTime = getTotalTime(timeToMeetOnValentineDay);

        $(".total-meet-timer-text").text(totalTime);
    }

    function calculatorTimers() {
        calculatorTimer();
        calculatorTotalLovedTime();
        calculatorTotalMeetTime();
    }

    setTimeout(() => {
        showCountdownDiv();
        showTotalMeetTimerDiv();
    }, 5000);

    setTimeout(() => {
        showTextCenter();
    }, 8000);

    setTimeout(() => {
        hideTextCenter();
    }, 15000);

    setTimeout(() => {
        setInterval(() => {
            if (isShowTextCenter) {
                hideTextCenter();
            } else {
                showTextCenter();
            }
        }, 3500);
    }, 16000);

    $(".container")
        .mouseenter(function () {
            $(".card").stop().animate(
                {
                    top: "-90px"
                },
                "slow"
            );

            setTimeout(() => {
                showCountdownDiv();
                showTotalMeetTimerDiv();
            }, 1000);

            setTimeout(() => {
                showTextCenter();
            }, 3000);
        })
        .mouseleave(function () {
            $(".card").stop().animate(
                {
                    top: 0
                },
                "slow"
            );

            setTimeout(() => {
                hideTextCenter();
            }, 3000);
        });
});

