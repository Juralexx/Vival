import React from 'react';
import useForm from 'functions/useForm';
import Icon from 'components/icons/Icon';
import Warning from 'components/tools/Warning';
import { Button } from 'components/global';
import { TextareaDynamic, InputDynamic, Alert, CircleLoader } from 'components/global';
import { addClass } from 'functions/utils';

const Form = () => {
    const { form, setForm, isLoading, err, setErr, submitted, setSubmitted, submit } = useForm()

    return (
        <div className='relative w-full mt-7 mx-auto'>
            {!submitted && !isLoading &&
                <>
                    <form onSubmit={submit} className="form">
                        <div className='grid grid-cols-2 xs:grid-cols-1 gap-2 mt-2'>
                            <div>
                                <InputDynamic
                                    className={'w-full'}
                                    type="text"
                                    name="Nom"
                                    placeholder="Nom"
                                    value={form.lastname}
                                    onChange={e => setForm(prev => ({ ...prev, lastname: e.target.value }))}
                                    isError={addClass(err.includes('lastname'))}
                                />
                                {err.includes('lastname') &&
                                    <Alert type="error">Veuillez saisir un nom valide</Alert>
                                }
                            </div>
                            <div>
                                <InputDynamic
                                    type="text"
                                    name="Prénom"
                                    placeholder="Prénom"
                                    value={form.name}
                                    onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                                    isError={addClass(err.includes('name'))}
                                />
                                {err.includes('name') &&
                                    <Alert type="error">Veuillez saisir un prénom valide</Alert>
                                }
                            </div>
                        </div>
                        <div className='grid grid-cols-2 xs:grid-cols-1 gap-2 mt-2'>
                            <div>
                                <InputDynamic
                                    type="text"
                                    name="Email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                                    isError={addClass(err.includes('email'))}
                                />
                                {err.includes('email') &&
                                    <Alert type="error">Veuillez saisir un email valide</Alert>
                                }
                            </div>
                            <div>
                                <InputDynamic
                                    type="text"
                                    name="Téléphone"
                                    placeholder="Téléphone"
                                    value={form.phone}
                                    onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                                    isError={addClass(err.includes('phone'))}
                                />
                                {err.includes('phone') &&
                                    <Alert type="error">Numéro de téléphone invalide</Alert>
                                }
                            </div>
                        </div>
                        <div className='w-full mt-2'>
                            <InputDynamic
                                type="text"
                                name="Sujet"
                                placeholder="Sujet"
                                value={form.subject}
                                onChange={e => setForm(prev => ({ ...prev, subject: e.target.value }))}
                                isError={addClass(err.includes('subject'))}
                            />
                            {err.includes('subject') &&
                                <Alert type="error">Veuillez saisir le sujet de votre message</Alert>
                            }
                        </div>
                        <div className='w-full mt-2'>
                            <TextareaDynamic
                                type="text"
                                name="Message"
                                placeholder="Message"
                                value={form.message}
                                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                                isError={addClass(err.includes('message'))}
                            />
                            {err.includes('message') &&
                                <Alert type="error">Veuillez saisir votre message</Alert>
                            }
                        </div>

                        <div className="flex justify-center mt-6">
                            <Button type="submit" className="v-primary fullwidth">
                                Envoyer
                            </Button>
                        </div>
                    </form>

                    {err.includes('server') &&
                        <Warning
                            open={err.includes('server')}
                            onClose={() => setErr(prev => prev.filter(e => e !== 'server'))}
                            title="Une erreur s'est produite..."
                            text="Une erreur s'est produite lors de la communication avec le serveur. Merci de réessayer plus tard."
                        />
                    }
                </>
            }
            {isLoading &&
                <div className='av-submission-done'>
                    <div className='av-form-loader'>
                        <CircleLoader />
                    </div>
                </div>
            }
            {submitted && !isLoading && err.length === 0 &&
                <div className='av-submission-done'>
                    <div role="button"
                        tabIndex={0}
                        className='header'
                        onClick={() => setSubmitted(false)}
                        onKeyDown={() => setSubmitted(false)}
                    >
                        <Icon name="ArrowLeft" /> Retour
                    </div>
                    <Icon name="CheckCircle" className='icon' />
                    <h3>Nous vous remercions pour votre message,<br />celui-ci a bien été envoyé.</h3>
                    <p>Nous vous répondrons dans les meilleurs délais.</p>
                </div>
            }
        </div>
    )
}

export default React.memo(Form);