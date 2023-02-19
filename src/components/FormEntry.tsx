import {FC} from 'react';

interface FormEntryProps {
    label: string,
    type: string,
    id: string,
    name: string,
    value: string,
    onChange: (e: any) => void,
}

const FormEntry: FC<FormEntryProps> = ({label, type, id, name, value, onChange}) => {
    
    return (
        <div>
            <label className="form-label">{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange} />
        </div>
    );
}

export default FormEntry;