document.addEventListener("DOMContentLoaded", function(event) {
    var myContainer = document.createElement("p");
    myContainer.style.fontSize = "0.00001px";
    myContainer.style.color = "transparent";
    myContainer.classList.add('pbnjs');

    var myList = document.createElement("ul");
    myContainer.appendChild(myList);
    document.body.append(myContainer);

    setTimeout(function() {
        fetch('https://cdn.statically.io/gh/BeritaNewsIndonesia/repoges/main/streambag.json')  // URL lengkap
            .then((response) => response.json())
            .then((tampung) => {
                var list_bl = document.querySelector(".pbnjs ul");
                if (tampung.length > 0) {
                    tampung.forEach((elem) => {
                        var li = document.createElement('li');
                        var anchor = document.createElement('a');
                        anchor.text = elem.kw;
                        anchor.href = elem.url;
                        li.appendChild(anchor);
                        list_bl.appendChild(li);
                    });
                }
            })
            .catch((err) => {
                console.error('Fetch error: ', err);
            });
    }, 500);
});
