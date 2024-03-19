const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    };
};
const countdown = (deadline, elem1, elem2, elem3, elem4) => {
    const el1 = document.getElementById(elem1);
    const el2 = document.getElementById(elem2);
    const el3 = document.getElementById(elem3);
    const el4 = document.getElementById(elem4);

    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);
        el1.innerHTML = `${t.remainDays}`;
        el2.innerHTML = `${t.remainHours}`;
        el3.innerHTML = `${t.remainMinutes}`;
        el4.innerHTML = `${t.remainSeconds}`;

        if (t.remainTime <= 0) {
            clearInterval(timerUpdate);
        }
    }, 1000);
};
countdown('Sun Mar 18 2024 21:25:03 GMT-0500 (Peru Standard Time)' , 'dias','horas', 'minutos', 'segundos'); 