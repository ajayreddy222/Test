import React from 'react';

/**
 * A simple divider.
 * 
 * ---
 * if divClass is provided, the divider is surrounded by
 * a <div> tag with the given divClass as className.
 * 
 * This:
 * ```
 * <div className='container-inner-md'>
 * 	<Divider/>
 * </div>
 * ```
 * can be replaced with:
 * ```
 * <Divider divClass='container-inner-md'/>
 * ```
 */
const Divider = ({divClass = ''}) => {
	const style = {
		marginBottom: '50px',
		marginTop: '50px',
	}

	return divClass
		? 	<div className={divClass}>	
				<hr className='divider' style={style}/>
			</div>
		: 	<hr className='divider' style={style}/>
}
export default Divider;
