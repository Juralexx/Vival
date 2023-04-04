import React from 'react';
import styled from 'styled-components';
import useForm from 'functions/useForm';
import Icon from 'components/tools/icons/Icon';
import Warning from 'components/tools/Warning';
import { Button } from 'components/tools/Buttons';
import { DynamicInput, Textarea } from 'components/tools/Inputs';
import { ErrorCard } from 'components/tools/ErrorCard';
import CircleLoader from 'components/tools/CircleLoader';
import { addClass } from 'functions/utils';

const Form = () => {
    const { form, setForm, isLoading, err, setErr, submitted, setSubmitted, submit } = useForm()

    return (
        <FormContainer>
            {!submitted && !isLoading &&
                <>
                    <form onSubmit={submit} className="form">
                        <InputsContainer>
                            <div className='input__container'>
                                <DynamicInput
                                    className={`${addClass(err.includes('lastname'), 'err')}`}
                                    type="text"
                                    text="Nom"
                                    placeholder="Nom"
                                    value={form.lastname}
                                    onChange={e => setForm(prev => ({ ...prev, lastname: e.target.value }))}
                                />
                                <ErrorCard
                                    text="Veuillez saisir un nom valide"
                                    display={err.includes('lastname')}
                                />
                            </div>
                            <div className='input__container'>
                                <DynamicInput
                                    className={`${addClass(err.includes('name'), 'err')}`}
                                    type="text"
                                    text="Prénom"
                                    placeholder="Prénom"
                                    value={form.name}
                                    onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                                />
                                <ErrorCard
                                    text="Veuillez saisir un prénom valide"
                                    display={err.includes('name')}
                                />
                            </div>
                        </InputsContainer>
                        <InputsContainer>
                            <div className='input__container'>
                                <DynamicInput
                                    className={`${addClass(err.includes('email'), 'err')}`}
                                    type="text"
                                    text="Email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                                />
                                <ErrorCard
                                    text="Veuillez saisir un email valide"
                                    display={err.includes('email')}
                                />
                            </div>
                            <div className='input__container'>
                                <DynamicInput
                                    className={`${addClass(err.includes('phone'), 'err')}`}
                                    type="text"
                                    text="Téléphone"
                                    placeholder="Téléphone"
                                    value={form.phone}
                                    onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                                />
                                <ErrorCard
                                    text="Numéro de téléphone invalide"
                                    display={err.includes('phone')}
                                />
                            </div>
                        </InputsContainer>
                        <InputsContainer>
                            <div className='input__container full'>
                                <DynamicInput
                                    className={`${addClass(err.includes('subject'), 'err')}`}
                                    type="text"
                                    text="Sujet"
                                    placeholder="Sujet"
                                    value={form.subject}
                                    onChange={e => setForm(prev => ({ ...prev, subject: e.target.value }))}
                                />
                                <ErrorCard
                                    text="Veuillez saisir le sujet de votre message"
                                    display={err.includes('subject')}
                                />
                            </div>
                        </InputsContainer>
                        <InputsContainer>
                            <div className='input__container full'>
                                <Textarea
                                    className={`${addClass(err.includes('message'), 'err')}`}
                                    type="text"
                                    text="Message"
                                    placeholder="Message"
                                    value={form.message}
                                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                                />
                                <ErrorCard
                                    text="Veuillez saisir votre message"
                                    display={err.includes('message')}
                                />
                            </div>
                        </InputsContainer>

                        <div className="btn__container">
                            <Button type="submit">
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
                <SubmissionDone>
                    <Loader>
                        <CircleLoader />
                    </Loader>
                </SubmissionDone>
            }
            {submitted && !isLoading && err.length === 0 &&
                <SubmissionDone>
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
                </SubmissionDone>
            }
        </FormContainer>
    )
}

export default React.memo(Form)

const FormContainer = styled.div`
    position  : relative;
    width     : 100%;
    margin    : 30px auto 0;

    .btn__container {
        display         : flex;
        justify-content : flex-end;
        margin-top      : 20px;

        button {
            min-width : 100%;
            margin    : 0 auto;
            @media(max-width: 768px) {
                min-width : 100%;
            }
        }
    }
`

export const InputsContainer = styled.div`
    position        : relative;
    display         : flex;
    justify-content : space-between;
    margin-bottom   : 10px;

    .input__container {
        width   : 49.5%;
        z-index : 1;
        &.full {
            width : 100%;
        }
        .icon-input,
        textarea {
            position  : relative;
            max-width : 100%;
        }

        > label {
            display : none;
        }

        input, textarea, label {
            font-family : var(--font-fam2);
        }
    }

    @media(max-width:576px) {
        flex-direction : column;
        margin-bottom  : 0;

        .input__container {
            width  : 100%;
            margin : 5px auto;
            &.full {
                width : 100%;
            }
            textarea {
                min-height : 150px;
            }
        }
    }
`;

/**
 * 
 */

export const SubmissionDone = styled.div`
    padding          : 20px;
    background-color : rgba(var(--primary-rgb), 0.05);
    border-radius    : var(--roound-sm);

    .header {
        display     : flex;
        align-items : center;
        font-size   : 20px;
        font-family : var(--font-fam2);
        font-weight : 500;
        cursor      : pointer;

        svg {
            width            : auto;
            height           : 35px;
            padding          : 7px;
            stroke           : var(--primary);
            background-color : rgba(var(--primary-rgb), 0.2);
            border-radius    : var(--rounded-full);
            margin-right     : 10px;
            &:hover {
                background-color : rgba(var(--primary-rgb), 0.3);
            }
        }
    }

    .icon {
        display : block;
        margin  : 0 auto;
        width   : 60px;
        height  : 60px;
        color   : var(--primary);
    }

    h3 {
        font-size   : 26px;
        text-align  : center;
        line-height : 1.2;
        padding-top : 15px;
        font-family : var(--font-fam2);
    }
    p {
        text-align : center;
        padding     : 20px 0;
    }
`

export const Loader = styled.div`
    padding         : 50px 0;
    display         : flex;
    justify-content : center;
    
    svg {
        width  : 44px;
        height : 44px;
        circle {
            stroke : var(--primary) !important;
        }
        path {
            stroke : var(--primary) !important;
        }
    }
`