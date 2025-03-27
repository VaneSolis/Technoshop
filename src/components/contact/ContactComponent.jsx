import {useForm} from "react-hook-form";
import './Contacto.css';
import { useState, useCallback } from 'react';

export default function ContactComponent() {
    const {
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting }, 
        reset
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
        }
    });

    const [enviado, setEnviado] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const enviar = useCallback(async (data) => {
        try {
            setSubmitError(null);
            // Simular envío de datos
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Datos del formulario:', data);
            setEnviado(true);
            reset();
            setTimeout(() => setEnviado(false), 3000);
        } catch (error) {
            setSubmitError('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
            console.error('Error al enviar formulario:', error);
        }
    }, [reset]);

    return (
        <main className="contacto-cont">
            <h1>¡Contáctanos!</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)} noValidate>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Ingresa tu nombre" 
                        {...register("nombre", { 
                            required: "El nombre es requerido",
                            minLength: {
                                value: 2,
                                message: "El nombre debe tener al menos 2 caracteres"
                            }
                        })}
                        aria-label="Nombre"
                        aria-invalid={errors.nombre ? "true" : "false"}
                    />
                    {errors.nombre && <span className="error-message" role="alert">{errors.nombre.message}</span>}
                </div>
                
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Ingresa tu email" 
                        {...register("email", { 
                            required: "El email es requerido",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                        aria-label="Email"
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <span className="error-message" role="alert">{errors.email.message}</span>}
                </div>
                
                <div className="form-group">
                    <input 
                        type="tel" 
                        placeholder="Ingresa tu teléfono" 
                        {...register("telefono", { 
                            required: "El teléfono es requerido",
                            pattern: {
                                value: /^[0-9\s\-\+]{10,}$/,
                                message: "Teléfono inválido"
                            }
                        })}
                        aria-label="Teléfono"
                        aria-invalid={errors.telefono ? "true" : "false"}
                    />
                    {errors.telefono && <span className="error-message" role="alert">{errors.telefono.message}</span>}
                </div>
                
                <div className="form-group">
                    <textarea 
                        placeholder="Deja tu mensaje aquí" 
                        {...register("mensaje", { 
                            required: "El mensaje es requerido",
                            minLength: {
                                value: 10,
                                message: "El mensaje debe tener al menos 10 caracteres"
                            }
                        })}
                        aria-label="Mensaje"
                        aria-invalid={errors.mensaje ? "true" : "false"}
                    />
                    {errors.mensaje && <span className="error-message" role="alert">{errors.mensaje.message}</span>}
                </div>
                
                {submitError && (
                    <div className="error-message" role="alert">
                        {submitError}
                    </div>
                )}

                <button 
                    className="enviar" 
                    type="submit"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {enviado && (
                    <div className="mensaje-exito" role="status">
                        ¡Mensaje enviado con éxito!
                    </div>
                )}
            </form>
        </main>
    );
}