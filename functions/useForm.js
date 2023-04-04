import React from 'react';
import axios from 'axios';
import { isEmailValid, isPhoneValid, containsAnyLetters, onlyLettersSpacesAndDashes } from './utils';

const useForm = () => {
    const [isLoading, setLoading] = React.useState(false)
    const [err, setErr] = React.useState([])
    const [submitted, setSubmitted] = React.useState(false)
    const [form, setForm] = React.useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const handleServerResponse = (ok) => {
        console.log(ok);
        if (ok) {
            setForm({ name: '', lastname: '', email: '', phone: '', subject: '', message: '' })
            if (err.includes('server')) {
                setErr(prev => prev.filter(e => e !== 'server'))
            }
            setLoading(true)
            const timeout = setTimeout(() => {
                setLoading(false)
                setSubmitted(true)
            }, 2000)
            return () => clearTimeout(timeout)
        } else setSubmitted(false)
    }

    /**
     * Check inputs values validity while typing
     */

    React.useEffect(() => {
        const { lastname, name, email, phone, subject, message } = form

        if (lastname.length > 0 && !onlyLettersSpacesAndDashes(lastname)) {
            if (!err.includes('lastname'))
                setErr(prev => [...prev, 'lastname'])
        } else {
            if (err.includes('lastname'))
                setErr(prev => prev.filter(e => e !== 'lastname'))
        }
        if (name.length > 0 && !onlyLettersSpacesAndDashes(name)) {
            if (!err.includes('name'))
                setErr(prev => [...prev, 'name'])
        } else {
            if (err.includes('name'))
                setErr(prev => prev.filter(e => e !== 'name'))
        }
        if (phone.length > 0 && ((phone.trim().replace(/[.-\s]/g, "").length > 10 && !isPhoneValid(phone)) || containsAnyLetters(phone))) {
            if (!err.includes('phone'))
                setErr(prev => [...prev, 'phone'])
        } else {
            if (err.includes('phone'))
                setErr(prev => prev.filter(e => e !== 'phone'))
        }
        if (err.includes('email') && isEmailValid(email)) {
            setErr(prev => prev.filter(e => e !== 'email'))
        }
        if (err.includes('subject') && subject.length > 3) {
            setErr(prev => prev.filter(e => e !== 'subject'))
        }
        if (err.includes('message') && message.length > 10) {
            setErr(prev => prev.filter(e => e !== 'message'))
        }
    }, [form])

    /**
     * Submission function
     */

    const submit = async (e) => {
        e.preventDefault()
        const { lastname, name, phone, email, subject, message } = form

        if (lastname === '' || lastname.trim().length < 2 || !onlyLettersSpacesAndDashes(lastname)) {
            setErr(prev => [...prev, 'lastname'])
        } else {
            if (err.includes('lastname'))
                setErr(prev => prev.filter(e => e !== 'lastname'))

            if (name === '' || name.trim().length < 2 || !onlyLettersSpacesAndDashes(name)) {
                setErr(prev => [...prev, 'name'])
            } else {
                if (err.includes('name'))
                    setErr(prev => prev.filter(e => e !== 'name'))

                if (email === '' || !isEmailValid(email)) {
                    setErr(prev => [...prev, 'email'])
                } else {
                    if (err.includes('email'))
                        setErr(prev => prev.filter(e => e !== 'email'))

                    if (phone.length > 0 && !isPhoneValid(phone)) {
                        setErr(prev => [...prev, 'phone'])
                    } else {
                        if (err.includes('phone'))
                            setErr(prev => prev.filter(e => e !== 'phone'))

                        if (subject === '' || subject.trim().length < 3) {
                            setErr(prev => [...prev, 'subject'])
                        } else {
                            if (err.includes('subject'))
                                setErr(prev => prev.filter(e => e !== 'subject'))

                            if (message === '' || message.trim().length < 10) {
                                setErr(prev => [...prev, 'message'])
                            } else {
                                if (err.includes('message')) {
                                    setErr(prev => prev.filter(e => e !== 'message'))
                                } else {
                                    await axios({
                                        method: 'POST',
                                        url: `/api/contact`,
                                        data: form,
                                    })
                                        .then(res => {
                                            handleServerResponse(true)
                                            console.log(res);
                                        })
                                        .catch(() => handleServerResponse(false))
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return { form, setForm, isLoading, err, setErr, submitted, setSubmitted, submit }
}

export default useForm