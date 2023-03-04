import React from "react";

interface FormEntryProps {
    label: string,
    type: string,
    id: string,
    name: string,
    value: string,
    onChange: (e: any) => void,
}

class FormEntry extends React.Component<FormEntryProps, any> {
    
    render() {
        return (
            <div>
                <label className="form-label">{this.props.label}</label>
                <input
                    type={this.props.type}
                    id={this.props.id}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

export default FormEntry;
