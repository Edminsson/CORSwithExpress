var hola;
(function(hola) {
    function skriv(message) {
        console.log(message);
    }

    function getBook() {
        return {
            title: "The greatest book",
            author: "Foo Fighter",
            year: "1999"
        };
    }

    hola = {
        skriv: skriv,
        getBook: getBook
    };

})(hola);