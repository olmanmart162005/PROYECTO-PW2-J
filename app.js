const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// CONFIGURAR HANDLEBARS
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// CARPETA PUBLICA (CSS, JS, IMAGENES)
app.use(express.static(path.join(__dirname, 'public')));

// =====================
// RUTAS
// =====================

// PRINCIPALES
app.get('/', (req, res) => res.render('index'));
app.get('/nosotros', (req, res) => res.render('nosotros'));
app.get('/cursos', (req, res) => res.render('cursos'));
app.get('/becas', (req, res) => res.render('becas'));
app.get('/cultura', (req, res) => res.render('cultura'));
app.get('/comoayudar', (req, res) => res.render('comoayudar'));
app.get('/contactos', (req, res) => res.render('contactos'));

// SUBPÁGINAS CURSOS
app.get('/curso-ninos', (req, res) => res.render('curso-ninos'));
app.get('/curso-adolescentes', (req, res) => res.render('curso-adolescentes'));
app.get('/curso-adultos', (req, res) => res.render('curso-adultos'));

// SUBPÁGINAS CULTURA
app.get('/eventosculturales', (req, res) => res.render('eventosculturales'));
app.get('/revista', (req, res) => res.render('revista'));
app.get('/galeria', (req, res) => res.render('galeria'));

// FORMULARIO
app.get('/formulario', (req, res) => res.render('formulario'));

// =====================
// SERVIDOR
// =====================
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});