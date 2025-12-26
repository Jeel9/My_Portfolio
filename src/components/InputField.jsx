import React from 'react';

function InputField({ label, type = 'text', ...props }) {
    return (
        <div className="px-8 py-5 w-full bg-white rounded-3xl border border-gray-300 border-solid max-md:px-5">
            <label className="sr-only">{label}</label>
            <input
                type={type}
                placeholder={label}
                className="w-full text-sm font-medium text-slate-500 bg-transparent border-none outline-none"
                {...props}
            />
        </div>
    );
}

export default InputField;