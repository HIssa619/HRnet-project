import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../redux/employeeSlice'

import Form from '../Components/form'
import Header from '../Components/Header'

import { ModalMessage } from 'modal-message-hrnet-hissa619'
import 'modal-message-hrnet-hissa619/dist/index.css'

import {
  employeeFields,
  initialFormData,
} from '../formConfig/employeeFormConfig'

/**
 * CreateEmployee – Page de création d’un nouvel employé.
 *
 * Affiche :
 * - Un en-tête
 * - Un formulaire réutilisable
 * - Une modale de confirmation à la soumission
 *
 * Optimisé avec :
 * - `useCallback` pour éviter la recréation inutile de la fonction handleSubmit
 * - Chargement conditionnel de la modale
 *
 * @returns {JSX.Element}
 */

export function CreateEmployee() {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = useCallback((employeeData) => {
    dispatch(addEmployee(employeeData))
    setShowModal(true)
  }, [dispatch])

  return (
    <div className="main">
      <Header link="/EmployeeList" page="View Current Employees" />
      <div className="container">
        <h1 className="title">Create Employee</h1>
        <Form
          fields={employeeFields}
          initialFormData={initialFormData}
          onSubmit={handleSubmit}
        />
        {showModal && (
          <ModalMessage onClose={() => setShowModal(false)}>
            <p>Employee created!</p>
          </ModalMessage>
        )}
      </div>
    </div>
  )
}
