import React from 'react';
import {List,Button} from 'semantic-ui-react';

const ListContainer = ({todo, onToggleTask, onDelTask}) => {
	return(
	<List  divided >		
		{todo.map( (e, i) =><List.Item key={i} >
										<List.Content floated="right">
											<Button  
												circular 
												icon="delete" 
												compact size="mini" 
												color="instagram"
												onClick={i=>{onDelTask(e.id);}} />
										</List.Content>
										<List.Content 
												key={i+2} 
												verticalAlign='bottom' 
												onClick={i => {onToggleTask(e.id);}} 
												style={{textDecoration:e.complete?'line-through':'none',
														color:e.complete?'#cad1ce':'#000000'}}> 
											<List.Icon 
												name="caret right" 
												key={i+1}/> 
											{e.title} 
										</List.Content>
									</List.Item> )}
	</List>
)}

 export default ListContainer;