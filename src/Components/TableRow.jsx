import React from 'react'

/**
 * TableRow - Composant qui représente une ligne dans un tableau, utilise React.memo pour éviter le re-rendu de toutes les lignes
 *
 * Ce composant prend un objet `item` et un tableau `columns`, et génère une ligne de tableau `<tr>`
 * avec des cellules `<td>` pour chaque colonne spécifiée.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.item - L'objet contenant les données à afficher dans la ligne.
 * @param {Array} props.columns - Le tableau des colonnes, chaque objet colonne devant avoir une propriété `key`.
 * @returns {JSX.Element} La ligne du tableau avec des cellules pour chaque colonne.
 */
const TableRow = React.memo(({ item, columns }) => {
    return (
        <tr>
            {columns.map((col) => (
                <td key={col.key}>{item[col.key]}</td>
            ))}
        </tr>
    )
})

export default TableRow
