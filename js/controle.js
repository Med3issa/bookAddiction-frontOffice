function addToCart(title) {
    var shopnbrtag = document.getElementById('shopcartnbr');
    shopnbrtag.textContent = Number(shopnbrtag.textContent) + 1;

    if (shopnbrtag.classList.contains('badge-primary')) {
        shopnbrtag.classList.remove('badge-primary');
        shopnbrtag.classList.add('badge-warning');

    }

    var modalbody = document.getElementById('modalbody');
    modalbody.textContent = title + " à été ajouté à votre panier";

}

function filterBooks(category) {
    var books = document.getElementsByClassName('allBooks');

    if (category == "all") {
        for (var index = 0; index < books.length; index++) {
            if (books[index].classList.contains("desafficher")) {
                books[index].classList.remove("desafficher");
            }
        }

    } else {
        for (var index = 0; index < books.length; index++) {
            if (!books[index].classList.contains(category)) {
                books[index].classList.add('desafficher')
            }else{
                if (books[index].classList.contains("desafficher")) {
                    books[index].classList.remove("desafficher");
                }
            }
        }
    }

}
