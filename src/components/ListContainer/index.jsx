import React from 'react';
import {Segment,Button} from 'semantic-ui-react';
import {Grid} from 'semantic-ui-react';

import './style.css'


const ListContainer = ({todo, onToggleTask, onDelTask}) => {
	return(
		<div className='ListContainer'>
			<Grid padded columns={1} reversed='mobile vertically' >
				{todo.map((e,i) => 
				<Grid.Column key={i} 
							inverted
							className="ListContainer__column" 
							style={{opacity: e.complete? '.5':'1'}}>
					<div className='ListContainer__wrap'>
						<div className='ListContainer__item' style={{backgroundColor:e.color}} />
						<div className='ListContainer__buttons'>
							<Button.Group basic size='small'>
								<Button   
									icon="check" 
									onClick={i=>{onToggleTask(e.id);}} />
								<Button   
									icon="x" 
									onClick={i=>{onDelTask(e.id);}} />
							</Button.Group>
						</div>
						<p>{e.title}</p>
					</div>
				</Grid.Column>)}
			</Grid>
		</div>
	)
}

 export default ListContainer;