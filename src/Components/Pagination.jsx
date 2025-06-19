/**
 * Composant d'interface pour gérer la pagination d'une liste de données.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.data - L'ensemble des données à paginer.
 * @param {number} props.currentPage - Le numéro de la page actuellement affichée.
 * @param {number} props.itemsPerPage - Le nombre d'éléments à afficher par page.
 * @param {number} props.totalPages - Le nombre total de pages disponibles.
 * @param {Function} props.setPage - Fonction pour changer la page actuelle.
 *
 * @returns {JSX.Element} Composant JSX affichant les contrôles de pagination.
 */
export default function Pagination({
    data,
    currentPage,
    itemsPerPage,
    totalPages,
    setPage,
}) {
    return (
        <div className="pagination" style={{ marginTop: '10px' }}>
            <span>
                Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                {Math.min(currentPage * itemsPerPage, data.length)} of{' '}
                {data.length} entries
            </span>
            <div>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setPage(currentPage - 1)}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => setPage(pageNumber)}
                            style={{
                                fontWeight:
                                    currentPage === pageNumber
                                        ? 'bold'
                                        : 'normal',
                                backgroundColor:
                                    currentPage === pageNumber
                                        ? '#45a049'
                                        : 'transparent',
                            }}
                        >
                            {pageNumber}
                        </button>
                    )
                )}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
