import React from 'react'
import '../css/Contact.css'

export const Contact = () => {
  return (
    <div className='sectionPart'>
      <h1>
        Contacto
      </h1>
      <form className='contact' action="mailto:hello@evolve2digital.com" >
        <input className='formField' type="text" name="name" placeholder='Nombre' />
        <input className='formField' type="text" name="surname" placeholder='apellido' />
        <input className='formField' type="text" name="telephone" placeholder='Teléfono' />
        <input className='formField' type="text" name="email" placeholder='Email' />
        <textarea className='formField' name="request" placeholder='Escribe tu consulta...' />
        <input className='formField' type="submit" value="Enviar" />
      </form>
    </div>

  )
}
