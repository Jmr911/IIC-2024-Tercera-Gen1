console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Ingenieria Industrial",
        "url_image": "./Images/Ingenieria-Industrial.png",
        "desc": "Optimiza procesos, sistemas u organizaciones complejos mediante el desarrollo, la mejora y la implementación de sistemas integrados de personas (recursos humanos), riqueza, conocimiento, información y equipamiento, energía, materiales y procesos.",
        "cta": "mostrar Mas...",
        "link": "./Ingenieria-Industrial.php"
    },

    {
        "title": "Ingenieria en Sistemas",
        "url_image": "./Images/Ingenieria-Sistemas.png",
        "desc": "Revisa minuciosamente los datos para la creación de programas, aplicativos y herramientas que faciliten los procesos empresariales en un entorno de información segura y protegida",
        "cta": "mostrar Mas...",
        "link": "./Ingenieria-Sistemas.php"
    },

    {
        "title": "Administracion",
        "url_image": "./Images/Administracion.png",
        "desc": "Asegura el funcionamiento óptimo de cada elemento dentro de la organización, promoviendo el uso eficiente de los recursos aplicándolos para la obtención de las rentabilidades propuestas.",
        "cta": "mostrar Mas...",
        "link": "./Administracion.php"
    }
];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            //Llamar a la funcion
            this.insertData(_self);
        },

        insertData: function (_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        tplCardItem: function (item, index) {
            return (`<div class= 'card-item' id="card-number-${index}">
                <img src="${item.url_image}"/>
                    <div class='card-info'>
                        <p class= 'card-title'>${item.title}</p>
                        <p class= 'card-desc'>${item.desc}</p>
                        <a class= 'card-cta' target= 'blank' href='${item.link}'>${item.cta}</a>
                     </div>
                </div>`
            )
        } 
    }
    CARD.init();
})();