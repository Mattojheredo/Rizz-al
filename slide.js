    const slides = [
        { year: "1864–1870", short: "Childhood", group: "early",   title: "Teodora Alonso Realonda",
            text: "His mother served as his first mentor, introducing him to the alphabet and stories like The Moth and the Flame, which sparked his lifelong passion for learning and critical thinking.",
            img: "/Images/binan.jpg" },

        { year: "1870–1872", short: "Childhood", group:"early",  title: "Biñan Private School",
            text: "A traditional school house under Maestro Justiniano Aquino Cruz where he quickly outpaced his peers academically, despite the school's strict and frequent use of corporal punishment.",
            img: "/Images/binanlol.png" },

        { year: "1872–1877", short: "High School", title: "Ateneo Municipal de Manila",
            text: "A Jesuit-run institution where he advanced through the rigid Emperor ranking system, mastered the humanities, and graduated as a 15-year-old with a Bachelor of Arts degree.",
            img: "/Images/ateneo.jpg" },

        { year: "1877–1882", short: "College",    title: "University of Santo Tomas (UST)",
            text: "A Dominican-run university where he initially took Philosophy but shifted to Medicine to cure his mother's advancing blindness, a period ultimately marred by pervasive racial discrimination.",
            img: "/Images/UST.jpg" },

        { year: "1882–1884", short: "Specialized", group: "Specialized",   title: "Universidad Central de Madrid",
            text: "The Spanish university where he achieved true intellectual freedom, simultaneously completing dual licentiates in Medicine and Philosophy and Letters while immersing himself.",
            img: "/Images/madrid.jpg" },

        { year: "1885–1886", short: "Specialized", group: "Specialized",  title: "University of Paris",
            text: "A European medical hub where he worked daily as clinical assistant to the world-renowned eye specialist Dr. Louis, mastering cataract surgery and ophthalmic skills to cure his mothers blindness.",
            img: "/Images/paris.jpg" }
        ];

        const slideEl = document.getElementById("slide");
            const img     = document.getElementById("slideImg");
            const years   = document.getElementById("slideYears");
            const title   = document.getElementById("slideTitle");
            const text    = document.getElementById("slideText");
            const steps   = document.getElementById("steps");
            const count   = document.getElementById("count");
            const prev    = document.getElementById("prev");
            const next    = document.getElementById("next");
    let index = 0;

    slides.forEach((s, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "step";

        if (i > 0 && s.group && s.group === slides[i - 1].group) {
            b.classList.add("linked");
        }

        b.innerHTML = "<span>" + s.short + "</span>";
        b.setAttribute("aria-label", s.title + ", " + s.year);
        b.addEventListener("click", () => show(i));
        steps.appendChild(b);
    });

    steps.style.setProperty("--n", slides.length);

        function show(i) {
            index = Math.max(0, Math.min(slides.length - 1, i));
            slideEl.classList.add("fade");
            setTimeout(() => {
            const s = slides[index];
            img.src = s.img;
            img.alt = s.title;
            years.textContent = s.year;
            title.textContent = s.title;
            text.textContent = s.text;
            count.textContent = (index + 1) + " of " + slides.length;
            prev.disabled = index === 0;
            next.disabled = index === slides.length - 1;
            document.querySelectorAll(".step").forEach((el, n) =>
            el.classList.toggle("active", n === index));
            slideEl.classList.remove("fade");
    }, 200);
    }

        prev.addEventListener("click", () => show(index - 1));
            next.addEventListener("click", () => show(index + 1));
            document.addEventListener("keydown", e => {
        if (e.key === "ArrowLeft") show(index - 1);
        if (e.key === "ArrowRight") show(index + 1);
    });

show(0);