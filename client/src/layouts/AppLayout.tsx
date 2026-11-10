import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import ApiStatusChip from '../components/ui/ApiStatusChip'
import NotificationBell from '../components/ui/NotificationBell'
import { useAuth } from '../features/auth/useAuth'
import { roleHome } from '../utils/roleHome'

const USER_LINKS = [
  { to: '/app', label: 'Dashboard', end: true },
  { to: '/app/vehicles', label: 'Vehicles', end: false },
  { to: '/app/wallet', label: 'Wallet', end: false },
  { to: '/app/transactions', label: 'Toll history', end: false },
]

const OPERATOR_LINKS = [
  { to: '/operator', label: 'Toll simulator', end: true },
  { to: '/operator/dashboard', label: 'Dashboard', end: false },
  { to: '/operator/transactions', label: 'Transactions', end: false },
]

const ADMIN_LINKS = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/plazas', label: 'Plazas & rates', end: false },
  { to: '/admin/transactions', label: 'Transactions', end: false },
  { to: '/admin/users', label: 'Users', end: false },
  { to: '/operator', label: 'Toll simulator', end: true },
]

// Shell for every logged-in page. Later slices add more links per role here.
export default function AppLayout() {
  const { user, logout } = useAuth()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const links =
    user?.role === 'USER'
      ? USER_LINKS
      : user?.role === 'ADMIN'
        ? ADMIN_LINKS
        : user?.role === 'OPERATOR'
          ? OPERATOR_LINKS
          : []
  const pageTitle =
    links.find((link) => pathname === link.to || (!link.end && pathname.startsWith(`${link.to}/`)))
      ?.label ?? 'Overview'

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link to={user ? roleHome(user.role) : '/'} className="sidebar-brand">
          <span className="sidebar-brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M12 4 7 28M20 4l5 24M16 8v4m0 4v4m0 4v2" />
            </svg>
          </span>
          <span>Toll<span className="sidebar-brand__light">Cloud</span></span>
        </Link>

        <p className="sidebar-label">WORKSPACE</p>
        <nav className="sidebar-nav" aria-label="Main navigation">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `sidebar-nav__link${isActive ? ' sidebar-nav__link--active' : ''}`
              }
            >
              <span className="sidebar-nav__indicator" aria-hidden="true" />
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-account">
            <span className="sidebar-account__avatar">{user?.name?.slice(0, 1).toUpperCase()}</span>
            <span className="sidebar-account__details">
              <strong>{user?.name}</strong>
              <span>{user?.role}</span>
            </span>
          </div>
          <button type="button" className="sidebar-signout" onClick={handleLogout}>
            <span aria-hidden="true">↗</span> Sign out
          </button>
          <ApiStatusChip />
        </div>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <div>
            <span className="app-topbar__eyebrow">TOLLCLOUD / WORKSPACE</span>
            <h1>{pageTitle}</h1>
          </div>
          <div className="app-topbar__actions">
            {user?.role === 'USER' && <NotificationBell />}
            <span className="app-topbar__secure"><span /> Secure portal</span>
          </div>
        </header>

        <main className="content">
          <Outlet />
        </main>

        <footer className="footer">
          <span>Cloud-Based Toll Collection &amp; Revenue Management</span>
          <span>Built for faster journeys</span>
        </footer>
      </div>
    </div>
  )
}