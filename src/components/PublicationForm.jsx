import React from 'react';
import InputField from './InputField';

function PublicationForm() {
    const formFields = [
        { label: 'Name of Publication', type: 'text' },
        { label: 'Website', type: 'url' },
        { label: 'Address Line 1', type: 'text' },
        { label: 'Address Line 2', type: 'text' },
        { label: 'City', type: 'text' },
        { label: 'State', type: 'text' },
        { label: 'Country', type: 'text' },
        { label: 'Zip code', type: 'text' },
    ];

    return (
        <form className="flex relative flex-col p-10 mt-16 max-w-full bg-white rounded-3xl w-[872px] max-md:px-5 max-md:mt-10">
            <header className="flex gap-2.5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                    <h1 className="text-2xl font-semibold tracking-tight text-gray-800 max-md:max-w-full">
                        Add a publication
                    </h1>
                    <p className="mt-2 mr-auto text-base text-slate-500 max-md:max-w-full">
                        Content to be added
                    </p>
                </div>
                <button className="flex gap-1 my-auto text-sm font-semibold text-yellow-800 whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/29a521d3cc682e89f3b4db9de922f66bd16e201bee244980f62d23aa0bcb80a6?apiKey=c2673a59331947538c8f79e3f8433fb2&&apiKey=c2673a59331947538c8f79e3f8433fb2" alt="" className="shrink-0 w-5 aspect-square" />
                    <span>Close</span>
                </button>
            </header>

            <div className="mt-8 space-y-6">
                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <InputField label={formFields[0].label} type={formFields[0].type} />
                    <InputField label={formFields[1].label} type={formFields[1].type} />
                </div>

                {formFields.slice(2, 4).map((field, index) => (
                    <InputField key={index} label={field.label} type={field.type} />
                ))}

                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <InputField label={formFields[4].label} type={formFields[4].type} />
                    <InputField label={formFields[5].label} type={formFields[5].type} />
                </div>

                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <InputField label={formFields[6].label} type={formFields[6].type} />
                    <InputField label={formFields[7].label} type={formFields[7].type} />
                </div>
            </div>

            <button className="self-center px-8 py-4 mt-8 text-base font-semibold text-white whitespace-nowrap bg-yellow-800 rounded-3xl max-md:px-5">
                Done
            </button>
        </form>
    );
}

export default PublicationForm;