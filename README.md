
# 🛋️ Tienda de Muebles

**Tienda de Muebles** es una aplicación web construida con Next.js que permite a los usuarios explorar una colección de muebles organizados por categorías. Está diseñada para ser moderna, responsiva y fácilmente extensible.

---

## 🚀 Características

- ✅ Catálogo interactivo con imágenes y categorías
- ✅ Navegación dinámica entre secciones (Cocinas, Lámparas, Muebles, etc.)
- ✅ Estilos personalizados con Tailwind CSS
- ✅ Componentes reutilizables y arquitectura modular
- ✅ Mapa de ubicación con `react-leaflet`
- ✅ Diseño responsivo para escritorio y móvil

---

## 🛠️ Tecnologías utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- JavaScript (ES6+)

---

## 📁 Estructura del proyecto

```
/app
  ├── /catalogo         # Página con botones por categoría
  ├── /contacto         # Página con formulario y mapa
/componentes
  ├── Cocinas.jsx
  ├── Lamparas.jsx
  ├── Muebles.jsx
  ├── StoreLocation.jsx
  └── MapSection.jsx
/utils
  └── muebles.js        # Datos estructurados con schema.org
/public
/styles
  └── globals.css       # Estilos globales
```

---

## 🔧 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/ElderL99/Tienda-de-Muebles.git
cd Tienda-de-Muebles
```

2. Instala dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

Accede a `http://localhost:3000` para ver la app.

---

## 🌍 Mapa de ubicación

El componente de contacto incluye un mapa integrado con **Leaflet**, mostrando la dirección de una sucursal física. Este componente es cargado dinámicamente para evitar errores en el `build`.

---

## 📦 Funcionalidades futuras (TODO)

- [ ] Carrito de compras
- [ ] Página de detalle por producto
- [ ] Autenticación de usuarios
- [ ] Panel administrativo (CRUD)
- [ ] Integración con base de datos (MongoDB o Firebase)

---

## 🖼️ Capturas de pantalla

*Agrega capturas aquí si deseas mostrar tu UI.*

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Haz un fork del repositorio, crea una rama con tus cambios y abre un Pull Request.

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

---

## 📬 Contacto

Autor: [@ElderL99](https://github.com/ElderL99)

¿Tienes ideas o sugerencias? ¡Estoy abierto a mejoras!
