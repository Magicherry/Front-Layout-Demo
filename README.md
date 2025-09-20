<h2 align="center">
  Frontend Layout Demo <br/>
</h2>

<p align="center">
  <img src="https://img.shields.io/badge/Vue.js-2.7.14-green?logo=vue.js" alt="Vue.js Version">
  <img src="https://img.shields.io/badge/Element_UI-2.15.12-blue?logo=element" alt="Element UI">
  <img src="https://img.shields.io/badge/Vue_Router-3.5.1-green?logo=vue.js" alt="Vue Router">
  <img src="https://img.shields.io/badge/Node.js-14+-green?logo=nodedotjs" alt="Node.js">
  <img src="https://img.shields.io/badge/CSS-Layouts-orange?logo=css3" alt="CSS Layouts">
</p>

<p align="center">
  A comprehensive Vue.js application demonstrating various CSS layout techniques and methodologies for internal company demonstration and educational purposes.
</p>

## Features

- **Interactive Layout Demonstrations**: Live examples of different CSS layout techniques
- **Responsive Design**: All layouts adapt to different screen sizes
- **Modern UI**: Clean, professional interface built with Element UI
- **Navigation System**: Easy-to-use sidebar navigation with search functionality
- **Educational Purpose**: Perfect for learning and understanding CSS layout concepts

## Layout Techniques Included

| # | Layout Type | Description | Key Features |
|---|-------------|-------------|--------------|
| 1 | Box Model Layout | Demonstrates the fundamental CSS box model with proper spacing and alignment | Flexbox principles, proper spacing, alignment techniques |
| 2 | Fluid Layout | Shows how to create flexible layouts that adapt to container width | Percentage-based sizing, container adaptation |
| 3 | Flexbox Layout | Comprehensive examples of CSS Flexbox properties for modern layouts | Modern flexible layouts, CSS Flexbox properties |
| 4 | Grid Layout | Implementation of CSS Grid system using Element UI components | Structured layouts, Element UI grid system |
| 5 | Positioning Layout | Demonstrates absolute, relative, and transform-based positioning | Absolute/relative positioning, transform techniques |
| 6 | Multi-Column Layout | Examples of creating multi-column text layouts for content-heavy pages | Multi-column text, content-heavy page layouts |
| 7 | Responsive Layout | Responsive design implementation with breakpoints for different devices | Breakpoint-based design, device compatibility |
| 8 | Table Layout | Traditional table-based layout examples for tabular data presentation | Tabular data presentation, table-based structure |

## Technology Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| Frontend Framework | Vue.js | 2.7.14 | Core application framework |
| UI Library | Element UI | 2.15.12 | Component library and styling |
| Router | Vue Router | 3.5.1 | Client-side routing |
| Build Tool | Vue CLI | 5.0.8 | Development and build tooling |
| HTTP Client | Axios | 0.27.2 | API requests and data fetching |
| Data Visualization | ECharts | 5.4.1 | Potential chart and graph rendering |
| Cookie Management | js-cookie | 3.0.1 | Browser cookie handling |
| Verification Components | vue-monoplasty-slide-verify | 1.3.1 | Slide verification functionality |

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Magicherry/Front-Layout-Demo.git
cd Front-Layout-Demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run serve
```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be generated in the `dist/` directory.

## Project Structure

```
src/
├── assets/
│   └── global.css          # Global styles
├── router/
│   └── index.js           # Application routes
├── views/
│   ├── Layout.vue         # Main layout component
│   ├── 404.vue           # 404 error page
│   ├── boxModel/         # Box model layout examples
│   ├── flexbox/          # Flexbox layout examples
│   ├── fluid/            # Fluid layout examples
│   ├── grid/             # Grid layout examples
│   ├── multiColumn/      # Multi-column layout examples
│   ├── position/         # Positioning layout examples
│   ├── responsive/       # Responsive layout examples
│   └── table/            # Table layout examples
├── App.vue               # Root component
└── main.js              # Application entry point
```

## Features Overview

### Navigation
- Collapsible sidebar navigation
- Search functionality to quickly find specific layouts
- Clean, intuitive interface design

### Layout Demonstrations
Each layout type includes:
- Live interactive examples
- Clear visual representation
- Responsive behavior demonstration
- Code implementation showcases

### Responsive Design
- Mobile-first approach
- Breakpoint-based responsive behavior
- Cross-device compatibility

## Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with Vue.js and Element UI
- Designed for internal company demonstration and educational purposes
- Created by Magicherry

---

*This project serves as an educational resource for understanding different CSS layout techniques and their practical implementations in modern web development.*
