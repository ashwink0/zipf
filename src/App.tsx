import React from 'react';
import {useState, useLayoutEffect} from "react";
import {
	LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './App.css';
import {getData, getAverageSpread, getWordCount} from './util'
import {theGreatGatsby} from "./texts";
import Information from "./components/Information";
import Button from '@material-ui/core/Button';

function App() {
	const [text, setText] = useState('')
	const [textData, setTextData] = useState([])
	const [width, setWidth] = useState(0)


	useLayoutEffect(() => {
		function updateSize() {
			setWidth(window.innerWidth);
		}

		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return (
		<div className="App">
			<header className="App-header" style={width < 600 ? {
				flexDirection: 'column',
				alignItems: 'flex-start',
				textAlign: "center"
			} : {flexDirection: 'row'}}>
				<Information/>

				<div style={{flex: 2, color: 'black'}}>
					<Button
						size={"small"}
						variant="contained"
						style={{margin: '30px'}}
						onClick={() => {
							setText(theGreatGatsby);
						}}
					>Load 'The Great Gatsby'
					</Button>

					<textarea
						value={text}
						onChange={e => setText(e.target.value)}
						style={{width: '90%', height: '200px', minHeight: '200px', maxHeight: '450px', resize: 'vertical'}}
					/>

					<Button
						size={"small"}
						variant="contained"
						onClick={() => {
						if (text !== '') {
							// @ts-ignore
							setTextData(getData(text))
						}
					}}>Graph Data
					</Button>

					{getWordCount(text) < 50 && getWordCount(text) !== 1 ?
						<h6 style={{fontSize: '10px', margin: '3px'}}>Results may not be accurate because of the low word
							count.</h6> : null}
				</div>

				<div style={{
					color: 'black',
					flex: 3,
					width: '50%',
					height: '100%',
					margin: '0px',
					left: '0px',
					textAlign: 'center'
				}}>
					<LineChart
						style={{left: '0px'}}
						width={width < 600 ? 500 : 700}
						height={width < 600 ? 320 : 450}
						data={textData}
						margin={{
							top: 5, right: 5, left: 5, bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3"/>
						<XAxis dataKey="name" hide/>
						<YAxis/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey="expected" stroke="#8884d8" activeDot={{r: 5}} dot={<div/>}/>
						<Line type="monotone" dataKey="actual" stroke="#FF0000" activeDot={{r: 5}} dot={<div/>}/>
					</LineChart>
					<h5>Average
						Difference: {Math.round((getAverageSpread(textData) + Number.EPSILON) * 100) / 100} occurrences</h5>

				</div>
			</header>
		</div>
	);
}

export default App;
