/**
 * Composant Select réutilisable pour les menus déroulants.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.id - L'identifiant unique de l'élément <select>, utilisé également pour le label.
 * @param {string} props.label - Le texte du label associé au champ <select>.
 * @param {string|number} props.value - La valeur actuellement sélectionnée.
 * @param {Array} props.data - Les options à afficher dans la liste déroulante.
 * @param {Function} props.onChange - Fonction déclenchée lors d’un changement de valeur. Reçoit (id, value).
 * @param {string} [props.keyValue] - Si les objets de `data` sont des objets, indique la clé à utiliser comme valeur.
 *
 * @returns {JSX.Element} Élément JSX représentant une liste déroulante.
 */
export default function Select({
    id,
    label,
    value,
    data,
    onChange,
    keyValue,
    required = true,
}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                value={value}
                aria-label={label}
                onChange={(e) => onChange(id, e.target.value)}
                required={required}
            >
                {data.map((d) => (
                    <option
                        key={keyValue ? d[keyValue] : d}
                        value={keyValue ? d[keyValue] : d}
                    >
                        {keyValue ? d.name : d}
                    </option>
                ))}
            </select>
        </>
    )
}
