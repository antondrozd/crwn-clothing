import * as React from 'react'

import './form-input.styles.scss'

type PropsType = {
	handleChange: React.ReactEventHandler<HTMLInputElement>
	label: string
	value: string
}

const FormInput: React.FC<PropsType & React.ComponentPropsWithoutRef<'input'>> = ({
	handleChange,
	label,
	value,
	...restProps
}) => (
	<div className="group">
		<input className="form-input" onChange={handleChange} {...restProps} />
		{label && (
			<label className={`${value.length ? 'shrink' : ''} form-input-label`}>
				{label}
			</label>
		)}
	</div>
)

export default FormInput
