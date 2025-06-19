import { createSlice } from '@reduxjs/toolkit'

/**
 * Slice Redux pour la gestion des employés.
 *
 * Stocke les employés dans le state global et les persiste dans le localStorage.
 *
 */

export const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: JSON.parse(localStorage.getItem('employees')) || [], //initialisé depuis le localStorage (ou vide si inexistant)
    },
    reducers: {
        /**
         * Ajoute un employé au state Redux et le sauvegarde dans le localStorage.
         *
         * @param {Object} state - Le state actuel du slice
         * @param {Object} action - L'action contenant le payload de l'employé à ajouter
         * @param {Object} action.payload - Les données de l'employé à ajouter
         */
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
            localStorage.setItem('employees', JSON.stringify(state.employees))
        },
    },
})
export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer
