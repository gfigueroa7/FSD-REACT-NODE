const BusinessType = require('../domain/auth/businessType');
const Auth = require('../domain/auth/auth');
const Veterinary = require('../domain/veterinary/veterinary');
const Stores = require('../domain/stores/stores');
const Trainers = require('../domain/trainers/trainers');
const VeterinaryDetail = require('../domain/veterinary/veterinaryDetail');
const StoresDetail = require('../domain/stores/storesDetail');
const TrainersDetail = require('../domain/trainers/trainersDetail');
const News = require('../domain/news/news');
const Blog = require('../domain/blog/blog');

function migrate() {
    businessType.forEach(element => {
        BusinessType.create(element)
    });
    users.forEach(element => {
        Auth.create(element)
    });
    veterinary.forEach(element => {
        Veterinary.create(element)
    });
    stores.forEach(element => {
        Stores.create(element)
    });
    trainers.forEach(element => {
        Trainers.create(element)
    });
    veterinaryDetails.forEach(element => {
        VeterinaryDetail.create(element)
    });
    storeDetails.forEach(element => {
        StoresDetail.create(element)
    });
    trainerDetails.forEach(element => {
        TrainersDetail.create(element)
    });
    news.forEach(element => {
        News.create(element)
    });
    blog.forEach(element => {
        Blog.create(element)
    });
}

let businessType = [
    {
        "name": "Veterinary"
    },
    {
        "name": "Store"
    },
    {
        "name": "Trainer"
    }
]

let users = [
    {
        "name": "admin",
        "email": "admin@admin.com",
        "password": "$2b$10$3yzvKMd/JesjDrvvWqROrugLDvE80VhjGnKzKpVM6Nd1pvI.GDxPO",
        "rol": 1,
    },
    {
        "name": "Sofia",
        "email": "sofia@sofia.com",
        "password": "$2b$10$PuI2JwPAixg0xE7HQGGQ8eoY2EEAOtDQrv5casZw3Kblslz38wg5W",
        "business_type_id": 3,
    },
    {
        "name": "Marecelo",
        "email": "marcelo@marcelo.com",
        "password": "$2b$10$HSKKYge78s0/R1kwy/oBh.KF0.ma9QHs6YngPktmyMWqDuJclN2u2",
        "business_type_id": 3,
    },
    {
        "name": "Martin",
        "email": "martin@martin.com",
        "password": "$2b$10$MIAB6Zqsou.P5pWIo9R.U.fbxd9lnIUnnVshy5bZmLTd5C2Tf06Vq",
        "business_type_id": 3,
    }
]

let veterinary = [
    {
        "title": "Quiron",
        "text": "Una Veterinaria para cuidarlos tanto como tu lo harias.",
        "img": "assets/veterinary/vet_quiron.jpg",
        "crown": "gold",
        "crown_order": 1,
        "rating": 4.38,
        "people": 4,
        "total": 17.5,
    },
    {
        "title": "Teo",
        "text": "Cl??nica veterinaria. Asesoramiento t??cnico. Venta de alimentos y accesorios. Servicio de peluquer??a...",
        "img": "assets/veterinary/vet_teo.jpg",
        "crown": "silver",
        "crown_order": 2,
        "rating": 4.38,
        "people": 4,
        "total": 17.5,
    },
    {
        "title": "Medican",
        "text": "En Veterinaria 'Medican', estamos profundamente comprometidos con el bienestar animal. Hacete socio!",
        "img": "assets/veterinary/vet_medican.png",
        "crown": "bronze",
        "crown_order": 3,
        "rating": 3.67,
        "people": 3,
        "total": 11,
    },
    {
        "title": "Azul",
        "text": "Veterinaria Azul.",
        "img": "assets/veterinary/vet_azul.jpg",
    },
    {
        "title": "Cocky",
        "text": "Hace veinte a??os estamos en el barrio brindando una atenci??n profesional y personalizada a sus mascotas",
        "img": "assets/veterinary/vet_cocky.jpg",
    }
]

let stores = [
    {
        "title": "Pet???s Market",
        "text": "Lo mejor para ellos Contamos con una amplia variedad de alimentos balanceados, accesorios, productos veterinarios y todo lo que necesites para el cuidado de tus mascotas.",
        "img": "assets/stores/tienda_petmarket.png",
        "crown": "gold",
        "crown_order": 1,
        "rating": 4.3,
        "people": 5,
        "total": 21.5,
    },
    {
        "title": "Animalia",
        "text": "En animalia pet shop encontraras variedad de marcas de la mejor calidad y excelentes precios",
        "img": "assets/stores/tienda_animalia.jpg",
        "crown": "silver",
        "crown_order": 2,
        "rating": 3.75,
        "people": 4,
        "total": 15,
    },
    {
        "title": "Agrohuellas",
        "text": "Tenemos amplia variedad de art??culos para tu mascota: alimentos balanceados, alimentos medicados, accesorios y m??s.",
        "img": "assets/stores/tienda_agrohuellas.jpg",
        "crown": "bronze",
        "crown_order": 3,
        "rating": 4.17,
        "people": 3,
        "total": 12.5,
    },
    {
        "title": "Animal Shop Garibaldi",
        "text": "Comida para perros, comida para gatos, articulos sanitarios, transportadoras, camas, correas, juguetes, platos, bebederos, cualquier accesorio que ...",
        "img": "assets/stores/tienda_animalshop.png",
    },
    {
        "title": "Atrix",
        "text": "??Tus amigos son los nuestros!",
        "img": "assets/stores/tienda_atrix.jpeg",
    }
]

let trainers = [
    {
        "title": "DOG Uruguay",
        "text": "Es el ??nico centro de formaci??n profesional en Uruguay.<br>Brindamos servicios de Coaching a propietarios y profesionales.<br>Trabajamos desde el respeto hacia el perro.<br>Ense??amos con un sistema en positivo ,??nico a nivel mundial CoachinDOg propiedad de su creador Juan Carlos Moreda. ( Krusaiker )<br>Adiestramos con el m??todo ( Ne.Po.Po.)<br>Utilizando de forma profesional todas las herramientas en positivo.<br>Coach: es alguien que te ayuda a crecer, pensar y a mejorar la relaci??n con tu perro; Dog es hacer equipo con el te comunicas ayudas al Perro a pensar, ser proactivo y ayudas a potenciar sus capacidades para hacer equipo con el.<br>Avanzamos Trabajamos y Disfrutamos Juntos.<br>Haciendo equipo con el perro.<br>En Uruguay desde 2013.<br>Tenemos 32 a??os de experiencias en el trabajo funcional con perros de todas las razas.<br>??nicos autorizados a impartir la formaci??n completa del Sistema y marca Swedish Muzzle Work Bozal de impacto Sueco.<br>",
        "img": "assets/trainers/ent_doguruay.png",
        "crown": "gold",
        "crown_order": 1,
        "rating": 4.64,
        "people": 7,
        "total": 32.5,
    },
    {
        "title": "EntrenaDogs",
        "text": "Dedicamos nuestro tiempo a prestar servicios que ayuden a mejorar su relaci??n con sus mascotas y la relaci??n de sus mascotas con el mundo. <br> Nuestro enfoque es la obediencia, el autocontrol y la calma. Logrado a trav??s de ejercicio, refuerzos positivos, disciplina y mucha pasiencia. <br> Prestamos servicios de: <br> -Adiestramiento canino en obediencia b??sica y avanzada, desde los 3 meses de vida hasta los 7 a??os de edad.(con paseos incluidos) <br> -Entrenamiento efectivo para ense??ar a pasear a tu perro y a olvidarse del estr??s y el constante tironeo. Sin limite de edad <br> -Ba??os a domicilo (Para casos complicados o para mejorar el comportamiento en dicha labor) <br> -Cortes y limado de u??as",
        "img": "assets/trainers/ent_entrenadogs.jpg",
        "crown": "gold",
        "crown_order": 1,
        "rating": 4.42,
        "people": 6,
        "total": 26.5,
    },
    {
        "user_id": 2,
        "title": "Sof??a Ciliano",
        "text": "Mi idea de educaci??n canina se basa en formar un perro equilibrado y feliz, por lo tanto junto a cada familia nos encargamos de mejorar su bienestar emocional, brindando apoyo, trabajando en conjunto y cada caso en particular.",
        "img": "assets/trainers/ent_sofia.png",
        "crown": "silver",
        "crown_order": 2,
        "rating": 3.6,
        "people": 5,
        "total": 18,
    },
    {
        "user_id": 3,
        "title": "Marcelo Lima Viera",
        "text": "Adiestramiento en Obediencia.",
        "img": "assets/trainers/ent_marcelo.jpg",
        "crown": "bronze",
        "crown_order": 3,
        "rating": 3.6,
        "people": 5,
        "total": 18,
    },
    {
        "title": "Dog Walkers",
        "text": "Adiestramiento canino.",
        "img": "assets/trainers/ent_dogwalkers.jpg",
    },
    {
        "user_id": 4,
        "title": "Martin",
        "text": "Soy adiestrador ense???? al can el adiestramiento b??sico, de agilidad, y defensa de los mismos.",
        "img": "assets/trainers/ent_martin.jpg",
    }
]

let veterinaryDetails = [
    {
        "veterinary_id": 1,
        "week": "Lun a Vie de 09:00 - 18:30",
        "saturday": "Sabados de 10:00 - 16:00",
        "sunday": "CERRADO",
        "phone": 23366338,
        "email": "vetquiron2@gmail.com",
        "address": "Aires Puros, Montevideo",
        "location": "Felipe Carape 4514",
        "map_img": "/assets/veterinary/quiron_map.jpg",
        "map_url": "https://www.google.com/maps/place/Veterinaria+Quir%C3%B3n/@-34.8525212,-56.1949203,15z/data=!4m5!3m4!1s0x0:0xbac1eb4f1c53014b!8m2!3d-34.8525212!4d-56.1949203",
    }
]

let storeDetails = [
    {
        "store_id": 1,
        "week": "Lun a Vie de 10:00 - 20:00",
        "saturday": "Sabados de 10:00 - 20:00",
        "sunday": "CERRADO",
        "phone": 27147413,
        "email": "disnutrix@gmail.com",
        "address": "Scoser??a 2621",
        "location": "Montevideo",
        "map_img": "/assets/stores/petmarket_mapa.jpg",
        "map_url": "https://www.google.com/maps/place/Pet's+Market/@-34.9150753,-56.1557729,15z/data=!4m5!3m4!1s0x0:0x22f83f6e863bf6fc!8m2!3d-34.9150753!4d-56.1557729",
    }
]

let trainerDetails = [
    {
        "trainer_id": 1,
        "week": "",
        "saturday": "",
        "sunday": "",
        "phone": 094653576,
        "email": "doguruguay@gmail.com",
        "address": "Felipe Contucci 4228",
        "location": "Aires Puros, Montevideo",
        "map_img": "/assets/trainers/face_doguruguay.jpg",
        "map_url": "https://www.facebook.com/DOGUruguayDOG/",
    },
    {
        "trainer_id": 2,
        "week": "",
        "saturday": "",
        "sunday": "",
        "phone": 096339617,
        "email": "cristopher.dog@gmail.com",
        "address": "Colonia Nicolich",
        "location": "Canelones",
        "map_img": "/assets/trainers/face_entrenadogs.jpg",
        "map_url": "https://www.facebook.com/EntrenaDogsMVD/?ti=as",
    }
]

let news = [
    {
        "title": "Eval??an ley de tenencia compartida de mascotas en Espa??a",
        "text": "En Espa??a, la propuesta de ley para que los animales dejen de ser considerados como cosas logr?? un primer respaldo en el Congreso. Entre otras cosas, esto implica que en el caso de separaci??n, una pareja podr??a pedir la tenencia compartida. La informaci??n, en CNN Redacci??n.",
    },
    {
        "title": "Buscaba adoptar pero encontr?? a su perro perdido",
        "text": "Una mujer revisaba la lista de perros adoptables cuando se encontr?? con una foto que hizo que su coraz??n se detuviera.All?? estaba, su antiguo cachorro y mejor amigo, Kovu, a quien Aisha Nieves hab??a perdido de forma devastadora dos a??os antes cuando viv??a en Allentown, Pensilvania.",
    },
    {
        "title": "Consejos para cuidar mascotas en festejos del 4 de julio",
        "text": "Puede que los fuegos artificiales nos parezcan bonitos y festivos, pero explotan como disparos amplificados en los o??dos extremadamente sensibles de muchas de nuestras mascotas.Los o??dos humanos empiezan a sufrir un da??o con apenas 85 decibeles. Sin embargo, solo podemos escuchar hasta unos 20.000 hercios, mientras que los perros pueden o??r entre 45.000 y 65.000 hercios.Simplemente piensa en los da??os f??sicos y emocionales que puede sufrir un perro al que se deja fuera para que se enfrente al ruido.Por no mencionar que, cuando se asustan, los perros salen corriendo, y los due??os pueden perder a sus mejores amigos durante la noche.",
    },
    {
        "title": "??Qu?? tan saludable es dormir con tu mascota? Expertos lo explican",
        "text": "Con ese asunto importante fuera del camino, vayamos a contigo: ??es bueno para ti dormir con una mascota? Los expertos han dicho tradicionalmente que no porque es posible que no obtengas un sue??o de calidad.'Los animales pueden moverse, ladrar e interrumpir el sue??o. El sue??o de los perros (y gatos) no es continuo e inevitablemente se levantar??n y caminar??n sobre la cama, pisando a las personas. Toda esa actividad conducir?? a la fragmentaci??n del sue??o', dijo el Dr. Vsevolod Polotsky, director de investigaci??n del sue??o y profesor en el departamento de medicina de la Facultad de Medicina de la Universidad Johns Hopkins.Estos 'microdespertares' que pueden suceder sin tu conciencia 'son disruptivos porque te sacan del sue??o profundo', dijo Kristen Knutson, profesora asociada de neurolog??a y medicina preventiva en la Facultad de Medicina Feinberg de la Universidad de Northwestern. 'Se han asociado con la liberaci??n de la hormona del estr??s, el cortisol, que puede empeorar el sue??o'.",
    },
    {
        "title": "Cada vez m??s viajeros vuelan con mascotas en jet privado",
        "text": "La compa????a de aviaci??n mundial VistaJet inform?? de un aumento del 86% en el n??mero de animales que transport?? en los ??ltimos dos a??os, y no se trata solo de perros y gatos.Seg??n Matteo Atti, vicepresidente ejecutivo de marketing e innovaci??n de la compa????a, uno de cada cuatro de sus miembros vuela ahora con un compa??ero de cuatro patas, mientras que la cantidad de aves que se llevan a bordo tambi??n va en aumento.",
    },
]

let blog = [
    {
        "user_id": 2,
        "title": "Blog 1",
        "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum totam quia consequatur quis, eveniet tempora hic quidem perferendis tenetur inventore numquam voluptatum cupiditate debitis dolorum voluptas vitae repudiandae commodi magnam!",
        "view": true,
    },
    {
        "user_id": 3,
        "title": "Blog 2",
        "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum totam quia consequatur quis, eveniet tempora hic quidem perferendis tenetur inventore numquam voluptatum cupiditate debitis dolorum voluptas vitae repudiandae commodi magnam!",
        "view": true,
    },
    {
        "user_id": 4,
        "title": "Blog 3",
        "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum totam quia consequatur quis, eveniet tempora hic quidem perferendis tenetur inventore numquam voluptatum cupiditate debitis dolorum voluptas vitae repudiandae commodi magnam!",
        "view": true,
    },
]

module.exports = migrate;