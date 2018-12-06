import React from 'react';
import {List,Button,Image} from 'semantic-ui-react';

const ListContainer = ({listData, toggleTask,delTask}) => {return(
	<List  divided >		
		{listData.todo.map( (e, i) =><List.Item key={i} >
										<List.Content floated="right">
											<Button  
												circular 
												icon="delete" 
												compact size="mini" 
												color="instagram"
												onClick={i=>{delTask(e.id);}} />
										</List.Content>
										<List.Content 
												key={i+2} 
												verticalAlign='bottom' 
												onClick={i => {toggleTask(e.id);}} 
												style={{textDecoration:e.status?'line-through':'none',
														color:e.status?'#cad1ce':'#000000'}}> 
											<List.Icon 
												name="caret right" 
												key={i+1}/> 
											{e.title} 
										</List.Content>
									</List.Item> )}
	</List>
)}

 export default ListContainer;