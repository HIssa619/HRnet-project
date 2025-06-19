import states from '../data/states'

const today = new Date().toISOString().split('T')[0] // au format YYYY-MM-DD

export const employeeFields = [
  {
    id: 'firstName',
    label: 'First Name',
    type: 'text',
  },
  {
    id: 'lastName',
    label: 'Last Name',
    type: 'text',
  },
  {
    id: 'birthDate',
    label: 'Date of Birth',
    type: 'date',
    min: '1900-01-01',
    max: today, // empêche les dates futures
  },
  {
    id: 'startDate',
    label: 'Start Date',
    type: 'date',
    min: '2000-01-01',
    max: today, // empêche les dates futures
  },
  {
    id: 'street',
    label: 'Street',
    type: 'text',
  },
  {
    id: 'city',
    label: 'City',
    type: 'text',
  },
  {
    id: 'state',
    label: 'State',
    type: 'select',
    data: states,
    keyValue: 'abbreviation',
  },
  {
    id: 'zipCode',
    label: 'Zip Code',
    type: 'number',
    min: 0,
    max: 99999,
  },
  {
    id: 'department',
    label: 'Department',
    type: 'select',
    data: [
      { name: 'Sales' },
      { name: 'Marketing' },
      { name: 'Engineering' },
      { name: 'Human Resources' },
      { name: 'Legal' },
    ],
    keyValue: 'name',
  },
]

export const initialFormData = {
  firstName: '',
  lastName: '',
  birthDate: '',
  startDate: '',
  street: '',
  city: '',
  state: 'Al',
  zipCode: '',
  department: 'Sales',
}
