import "./form-input.styles.scss";

export default function FormInput({ handleChange, label, ...rest }) {
	return (
		<div className="form-input-container">
			<input className="form-input" onChange={handleChange} {...rest} />
			{label && (
				<label className={`${rest.value.length && "shrink"} form-input-label`} htmlFor="">
					{label}
				</label>
			)}
		</div>
	);
}
