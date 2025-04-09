import React from 'react'
import Input from './UI/Input'
import TextArea from './UI/TextArea'
import Button from './UI/Button'
import { URL } from '../data/utils'

const FormContact = () => {
    return (
        <form
            method="POST"
            className="flex flex-col gap-3 w-full max-w-xs"
            action="https://formsubmit.co/6a1fcbd37d4b014fff1eb11a04f701d0"
        >
            <h3 className="font-bold text-lg text-left md:text-left">CONTACTO</h3>

            <Input
                name="nombre"
                type="text"
                placeholder="Escriba su nombre"
                required
            />

            <Input
                name="email"
                type="email"
                placeholder="Escriba su email"
                required
            />

            <Input name="telefono" type="tel" placeholder="Escriba su teléfono" />

            <TextArea name="mensaje" placeholder="Escriba un mensaje" required />

            <Button type="submit" text="ENVIAR" color="var(--red)" />

            <input type="hidden" name="_template" value="table" />
            <input
                type="hidden"
                name="_subject"
                value="📩 Nuevo mensaje desde GRUPO BZN"
            />
            <input type="hidden" name="_from" value="Grupo BZN" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={URL} />
            <input
                type="hidden"
                name="_autoresponse"
                value="Gracias por contactarnos. Te responderemos pronto. 🚀"
            />
        </form>
    )
}

export default FormContact