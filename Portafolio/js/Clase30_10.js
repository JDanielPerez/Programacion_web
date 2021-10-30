function template(student){
    return `<div class="main_container">
    <div class="info">
        <h2 class="grid-name">${student.nombre}</h2>
        <div class="grid-link">
            <ul class="link">
                <li class="link_item"><a href="${student.github}">GitHub</a></li>
                <li class="link_item"><a href="${student.neocites}">Neocities</a></li>
                <li class="link_item"><a href="${student.email}">Email</a></li>
                <li class="link_item"><a href="${student.telefono}">Whatsapp</a></li>
            </ul>
        </div>
        <div class="grid-img"><img src="../img/Foto.jpeg" alt="Foto"></div>
    </div>
    <div class="Activities" >
        <table>
            <thead>
                <th>Actividades</th>
                <th>% ui/ux</th>
                <th>% dev</th>
            </thead>
            <tbody>
                <tr>
                    <td>${student.actividades[0].actividad}</td>
                    <td>${student.actividades[0].estadouiux}</td>
                    <td>${student.actividades[0].estadotecnico}</td>
                </tr>
                <tr>
                    <td>${student.actividades[1].actividad}</td>
                    <td>${student.actividades[1].estadouiux}</td>
                    <td>${student.actividades[1].estadotecnico}</td>
                </tr>
                <tr>
                    <td>${student.actividades[2].actividad}</td>
                    <td>${student.actividades[2].estadouiux}</td>
                    <td>${student.actividades[2].estadotecnico}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="percentage">
        <div class="circle"><p>${student.valoraciones.val_css}<br>Css</p></div>
        <div class="circle"><p>${student.valoraciones.val_js}<br>Js</p></div>
        <div class="circle"><p>${student.valoraciones.val_html}<br>Html</p></div>
        <div class="circle"><p>${student.valoraciones.val_ui}<br>Ui</p></div>
        <div class="circle"><p>${student.valoraciones.val_ux}<br>Ux</p></div>
        <div class="circle"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Heraldic_eastern_crown.svg/1200px-Heraldic_eastern_crown.svg.png" alt=""></div>
    </div>
</div>`
}

const students= {
    estudiantes: [
      {
        nombre: "Fulanito de tal",
        github: "https://github.com/mirepositorio",
        neocites: "miportafolio.neocities.org",
        email: "estudiante@dominio.com",
        telefono: "3125678900",
        actividades: [
          {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
          },
          {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
          },
          {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
          }
        ],
        valoraciones: {
          val_html: "3%",
          val_css: "4%",
          val_js: "6%",
          val_ui: "4%",
          val_ux: "9%"
        },
        calificacion: "54%"
      },
      {
        nombre: "Fulanito de tal",
        github: "https://github.com/mirepositorio",
        neocites: "miportafolio.neocities.org",
        email: "estudiante@dominio.com",
        telefono: "3125678900",
        actividades: [
          {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
          },
          {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
          },
          {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
          }
        ],
        valoraciones: {
          val_html: "3%",
          val_css: "4%",
          val_js: "6%",
          val_ui: "4%",
          val_ux: "9%"
        },
        calificacion: "54%"
      },
      {
        nombre: "Fulanito de tal",
        github: "https://github.com/mirepositorio",
        neocites: "miportafolio.neocities.org",
        email: "estudiante@dominio.com",
        telefono: "3125678900",
        actividades: [
          {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
          },
          {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
          },
          {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
          }
        ],
        valoraciones: {
          val_html: "3%",
          val_css: "4%",
          val_js: "6%",
          val_ui: "4%",
          val_ux: "9%"
        },
        calificacion: "54%"
      }
    ]
  }

  const body = document.body;
  body.innerHTML = students.estudiantes.map(template)