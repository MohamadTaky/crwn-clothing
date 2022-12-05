import { FormInputContainer, InputLabelContainer, InputContainer } from "./form-input.styles";

export default function FormInput({ handleChange, label, ...rest }) {
	return (
		<FormInputContainer>
			<InputContainer onChange={handleChange} {...rest} />
			{label && <InputLabelContainer shrink={rest.value.length}>{label}</InputLabelContainer>}
		</FormInputContainer>
	);
}
