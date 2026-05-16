# CRM Application

A modern, responsive Customer Relationship Management (CRM) platform built with React and Vite. Manage employees, customer records, and workflow efficiently with a clean, professional interface.

## Features

- **Employee Management**: Add, edit, delete, and manage employee records
- **Dashboard**: Visual business insights and analytics with stats cards
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Fully mobile-optimized interface that works on all devices
- **Mobile Navigation**: Hamburger menu for seamless mobile experience
- **Modern UI**: Clean, modern design with smooth animations and transitions

## Recent Updates

- ✨ **Full Mobile Responsiveness**: Added media queries for tablets and phones
- 📱 **Mobile Menu**: Interactive hamburger menu that collapses on mobile devices
- 🎨 **Responsive Layouts**: All pages adapt beautifully to different screen sizes
- 📊 **Flexible Tables**: Scrollable tables on mobile for better UX

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with Media Queries
- **Routing**: React Router
- **HTTP Client**: Axios
- **Fonts**: Poppins (Google Fonts)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd crmproject
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will run at `http://localhost:5173/`

## Project Structure

```
crmproject/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Pages.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Register.jsx
│   │   ├── Register.css
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.css
│   │   ├── EmployCRUD.jsx
│   │   └── EmployCRUD.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Pages & Features

### Home Page
- Hero section with CRM highlights
- Feature showcase
- Employee management CRUD interface

### About
- Information about the CRM platform
- Key features cards

### Services
- Service offerings
- Business benefits

### Contact
- Contact form for inquiries
- Professional contact interface

### Dashboard
- Overview statistics
- Business metrics cards
- Employee data management
- Todo and call tracking sections

### Authentication
- **Login**: Secure user login
- **Register**: New user registration
- **Logout**: Session management

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## API Integration

The app connects to a backend API at `http://localhost:8080/api/`:

- `POST /api/login` - User login
- `POST /api/register` - User registration
- `GET /api/employ` - Get all employees
- `POST /api/employ` - Add new employee
- `PUT /api/employ/:id` - Update employee
- `DELETE /api/employ/:id` - Delete employee

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 900px - 1199px
- **Mobile**: Below 900px (with enhanced support for 600px and below)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Dark mode toggle
- Advanced search and filtering
- Export to CSV/PDF
- Multi-language support
- Real-time notifications

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository or contact the development team.

---

**Happy managing! 🚀**
