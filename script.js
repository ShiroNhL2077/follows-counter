const counters = document.querySelectorAll (".counter");

counters.forEach(el => {
    el.innerText = "0";

    const updateCounter = () => {
        const target = +el.getAttribute ("data-target");
        const inc = target/500;
        const c = +el.innerText;

        if (c < target) {
            el.innerText = `${Math.ceil(c+ inc)}`;
            setTimeout(updateCounter,1);
        }

        else {
            el.innerText = target;
        }
    }



    el.addEventListener("div", updateCounter())
})