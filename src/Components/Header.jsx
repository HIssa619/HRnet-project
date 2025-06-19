/**
 * Header – Composant d'en-tête principal utilisé sur toutes les pages.
 * Props :
 * @param {string} link - Chemin vers lequel le bouton/lien doit rediriger (ex: '/EmployeeList', '/')
 * @param {string} page - Texte affiché dans le lien de navigation (ex: "Home", "View Current Employees")
 *
 *
 */
import { NavLink } from 'react-router-dom'
import logo from '../assets/Hrnet-logo.Webp'
export default function Header({ link, page }) {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <NavLink to={link}>{page}</NavLink>
        </div>
    )
}
