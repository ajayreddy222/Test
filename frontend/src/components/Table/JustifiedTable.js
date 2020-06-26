import React from 'react';
import parse from 'html-react-parser'
import SlickSlider from '../UI/Slick'
import {Link} from "react-router-dom";

/**
 * A table, where all elements align with one another.
 * actually, Pass it a 2D array of jsx elements.
 * 
 * if width is provided, the component flattens the array, then restructures it 
 * into an array of that width, and also places empty elements at the end of the array
 * as-needed, to keep all elements at the same relative size.
 * 
 * any jsx element in the 2D array can be replaced with an object 
 * containing : `{jsx: {}, flex: <some number>}`. 
 * the given flex will be applied to jsx element.
 * 
 * example usage:
 * ```
 * <JustifiedTable 
 *  	jsx={[
 *  		[  // first row
 * 			<img src={img1}/>,
 * 			<div>
 * 				<p> say my name </p>
 * 			</div>
 * 		],[  // second row
 * 			<>
 * 				<p> hello </p>
 * 				<p> okay? </p>
 * 			</>,
 * 			{  // this element has a custom flex width
 * 				jsx: <p> here's a wide section </p>,
 * 				flex: 4
 * 			}
 * 		]
 *  	]}
 * />
 * 
 * ```
 * 
 * also:
 * 
 * ```
 * <JustifiedTable 
 * 	width={3}  // the jsx array can be 1D
 * 	jsx={[
 * 		<img src='img1'/>,
 * 		<h5> small header </h5>,
 * 	]}
 * />
 * ```
 * 
 * @param jsx a 2D array of jsx elements.
 */
const JustifiedTable = ({jsx, width=0}) => {
	if (width>0) {
		width = Math.floor(width);
		jsx = jsx.flat();
		var newArray = [];

		while (jsx.length>0) 
			newArray.push(jsx.splice(0, width));
		
		while (newArray[newArray.length-1].length%width != 0 ) 
			newArray[newArray.length-1].push(<div/>);

		jsx = newArray;
	}



	return (
		jsx.map(row => (
			<div className='row'>
				{row.map(col => (
					<div className='col' style={col.flex ? {flex: col.flex} : {}}>
						{col.flex ? col.jsx : col}
					</div>
				))}
			</div>
		))
	);
}

export default JustifiedTable;

