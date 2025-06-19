import { useSelector } from 'react-redux'

import Table from '../Components/Table'
import Header from '../Components/Header'

//définition des colonnes du tableau des employés
const columns = [
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    { label: 'Start Date', key: 'startDate' },
    { label: 'Department', key: 'department' },
    { label: 'Birth Date', key: 'birthDate' },
    { label: 'Street', key: 'street' },
    { label: 'City', key: 'city' },
    { label: 'State', key: 'state' },
    { label: 'Zip Code', key: 'zipCode' },
]

/**
 * EmployeeList – Page d’affichage des employés existants.
 *
 * Ce composant :
 * - Affiche un en-tête avec un lien vers la page d’accueil
 * - Récupère la liste des employés depuis le store Redux
 * et l'affiche dans un tableau personnalisé
 *
 * @returns {JSX.Element} Composant de page EmployeeList
 */
export function EmployeeList() {
    const employees = useSelector((state) => state.employee.employees)
    return (
        <div className="main">
            <Header link="/" page="Home" />
            <div className="container">
                <h1 className="title">Current Employees</h1>
                <div className="main-list-table">
                    <Table data={employees} columns={columns} />
                </div>
            </div>
        </div>
    )
}
