import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            {/* <label className={`${otherProps.value.length > 0 ? }`}>{label}</label> or */}
            <input className="form-input" {...otherProps} />
            {label && (
                <label
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                        } form-input-label`}>
                    {label}
                </label>
            )}
        </div>
    );
}

export default FormInput;