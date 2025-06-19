/**
 * Composant visuel pour afficher des flèches de tri (ascendant et descendant).
 * Permet à l'utilisateur de trier une colonne d'un tableau.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.sortKey - La clé de tri associée à cette colonne.
 * @param {string} props.currentSortKey - La clé de tri actuellement active.
 * @param {'asc'|'desc'} props.currentSortDirection - La direction actuelle du tri.
 * @param {Function} props.onSort - Fonction appelée lors du clic sur une flèche. Reçoit (sortKey, direction).
 *
 * @returns {JSX.Element} Élément JSX représentant deux flèches de tri.
 */
export default function SortArrows({
    sortKey,
    currentSortKey,
    currentSortDirection,
    onSort,
}) {
    return (
        <span
            style={{
                marginLeft: '5px',
                display: 'inline-flex',
                flexDirection: 'column',
                cursor: 'pointer',
            }}
        >
            <span
                onClick={() => onSort(sortKey, 'asc')}
                style={{
                    color:
                        currentSortKey === sortKey &&
                        currentSortDirection === 'asc'
                            ? '#45a049'
                            : 'lightgray',
                    lineHeight: '0.8',
                }}
            >
                ▲
            </span>
            <span
                onClick={() => onSort(sortKey, 'desc')}
                style={{
                    color:
                        currentSortKey === sortKey &&
                        currentSortDirection === 'desc'
                            ? '#45a049'
                            : 'lightgray',
                    lineHeight: '0.8',
                }}
            >
                ▼
            </span>
        </span>
    )
}
