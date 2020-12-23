import React from 'react';
import {useState, useEffect} from "react";
import {
	LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ResponsiveContainer
} from 'recharts';
import './App.css';

import {getData} from './util'

let data = getData('Hello my name is Ashwin. This is a sentence');

function App() {
	const [text, setText] = useState("")
	const [textData, setTextData] = useState([])

	return (
		<div className="App">
			<header className="App-header">
				<div style={{flex: 1}}>
					<textarea
						value={text}
						onChange={e => setText(e.target.value)}
						style={{width: '90%', height: '200px', minHeight: '200px',maxHeight: '600px', resize: 'vertical'}}
					/>

					<button onClick={() => {
						// @ts-ignore
						setTextData(getData(text))
					}}>Graph Data
					</button>
				</div>

				<div style={{color: 'black', flex: 2, width: '50%', height: '35%', margin: '0px'}}>
						<LineChart
							width={700}
							height={500}
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
				</div>
			</header>
		</div>
	);
}

export default App;
