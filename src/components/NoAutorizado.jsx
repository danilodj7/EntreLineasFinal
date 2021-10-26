import React from 'react'
import { Link } from 'react-router-dom'

const NoAutorizado = () => {
    return (
        <div ClassName="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div ClassName="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
   
    <div ClassName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>


    <span ClassName="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

  
    <div ClassName="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div ClassName="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div ClassName="sm:flex sm:items-start">
          <div ClassName="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            
            <svg ClassName="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div ClassName="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 ClassName="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              No autorizado
            </h3>
            <div ClassName="mt-2">
              <p ClassName="text-sm text-gray-500">
               Espera a que el administrador te cambie de rol o envía un correo a daniloandresj@gmail.com Gracias.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ClassName="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <Link to ='/admin'>
        <button type="button" ClassName="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
          Aceptar
        </button>
        </Link>
      </div>
    </div>
  </div>
</div>
    )
}

export default NoAutorizado
