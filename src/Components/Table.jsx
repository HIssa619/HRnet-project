import { useState } from 'react'
import SortArrows from './SortArrows'
import Pagination from './Pagination'
import TableRow from './TableRow'
const ITEMS_PER_PAGE = [10, 25, 50, 100]

/**
 * Composant Table générique pour afficher, filtrer, trier et paginer des données tabulaires.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<Object>} props.data - Les données à afficher dans le tableau.
 * @param {Array<{ key: string, label: string }>} props.columns - Les colonnes à afficher, avec `key` (nom du champ) et `label` (intitulé affiché).
 *
 * @returns {JSX.Element} Un tableau avec recherche, tri et pagination.
 */
export default function Table({ data, columns }) {
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [sortKey, setSortKey] = useState(null)
    const [sortDirection, setSortDirection] = useState('asc')
    const [itemsPerPage, setItemsPerPage] = useState(10)

    /**
     * Filtrer les données en fonction du terme de recherche
     */
    const getFilteredData = () => {
        return data.filter((emp) =>
            Object.values(emp).some((val) =>
                String(val).toLowerCase().includes(search.toLowerCase())
            )
        )
    }
    /**
     * Trier les données selon la clé et la direction spécifiées
     */
    const getSortedData = (data) => {
        if (!sortKey) return data

        return [...data].sort((a, b) => {
            const aVal = a[sortKey]
            const bVal = b[sortKey]

            if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
            if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
            return 0
        })
    }
    // Appliquer les filtres et le tri
    const filteredData = getFilteredData()
    const sortedData = getSortedData(filteredData)
    const totalPages = Math.ceil(sortedData.length / itemsPerPage)

    // Sélection des données à afficher sur la page actuelle
    const paginatedData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    // Gestion du tri à partir des flèches
    const handleSort = (key, direction) => {
        setSortKey(key)
        setSortDirection(direction)
    }
    // Modification du nombre d'éléments affichés par page
    const handleItemsPerPage = (e) => {
        setItemsPerPage(Number(e.target.value))
        setCurrentPage(1)
    }
    return (
        <>
            {/* Zone de recherche et sélection du nombre d'éléments par page */}
            <div className="table-search">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        setCurrentPage(1)
                    }}
                    style={{ marginBottom: '10px' }}
                />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    <span>Show</span>
                    <select
                        value={itemsPerPage}
                        onChange={handleItemsPerPage}
                        aria-label="Items per page"
                    >
                        {ITEMS_PER_PAGE.map((items) => (
                            <option key={items}>{items}</option>
                        ))}
                    </select>
                    <span>entries</span>
                </div>
            </div>
            {/* Tableau principal */}
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>
                                {col.label}
                                <SortArrows
                                    sortKey={col.key}
                                    currentSortKey={sortKey}
                                    currentSortDirection={sortDirection}
                                    onSort={handleSort}
                                />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length}>No data found.</td>
                        </tr>
                    ) : (
                        paginatedData.map((item, index) => (
                            <TableRow
                                key={index}
                                item={item}
                                columns={columns}
                            />
                        ))
                    )}
                </tbody>
            </table>
            {/* Pagination */}
            <Pagination
                data={sortedData}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalPages={totalPages}
                setPage={setCurrentPage}
            />
        </>
    )
}
