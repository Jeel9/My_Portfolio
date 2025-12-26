import React from 'react';
import PublicationForm from './PublicationForm';
import ParaImg from '../assets/builder.jpg';

function PublicationFormContainer() {
    return (
        <main className="flex relative flex-col justify-center items-center px-16 py-20 text-center min-h-[1025px] max-md:px-5">
            <img loading="lazy" src={ParaImg} alt="" className="object-cover absolute inset-0 size-full" />
            <PublicationForm />
        </main>
    );
}

export default PublicationFormContainer;