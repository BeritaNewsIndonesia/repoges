document.addEventListener("DOMContentLoaded", function(event) {
    var myContainer = document.createElement("p");
    myContainer.style.display = "none";
    myContainer.classList.add('pbnjs');

    var myList = document.createElement("ul");
    myContainer.appendChild(myList);
    document.body.append(myContainer);

    setTimeout(function() {
        fetch('//cdn.statically.io/gh/BeritaNewsIndonesia/repoges/main/streambag.json').then((response) => {
            var list_bl = document.querySelector(".pbnjs ul");
            response.json().then((wadah) => { 
                if(wadah.length > 0) {
                    wadah.forEach((elem) => {
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
