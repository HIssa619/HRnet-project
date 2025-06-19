/**
 * Composant Input réutilisable pour les formulaires.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.id - L'identifiant unique de l'input, utilisé aussi pour lier le label.
 * @param {string} props.label - Le texte affiché dans le label associé à l'input.
 * @param {string|number} props.value - La valeur actuelle de l'input.
 * @param {string} props.type - Le type de champ (text, email, number, date, etc.).
 * @param {Function} props.onChange - La fonction appelée lors d'un changement de valeur. Reçoit (id, value).
 * @param {boolean} [props.required=false] - Indique si le champ est obligatoire.
 * @param {string} [props.autocomplete='off'] - Valeur de l’attribut autoComplete pour le champ.
 * @param {string} [props.min] - Valeur minimale pour les types de champ compatibles (ex : date).
 * @param {string} [props.max] - Valeur maximale pour les types de champ compatibles (ex : date).
 *
 * @returns {JSX.Element} Élément JSX représentant un champ de formulaire.
 */
export default function Input({
    id,
    label,
    value,
    type,
    onChange,
    required = true,
    autocomplete = 'off',
    min,
    max,
}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
                required={required}
                autoComplete={autocomplete}
                aria-label={label}
                min={min}
                max={max}
            />
        </>
    )
}
