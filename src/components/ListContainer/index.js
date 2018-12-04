import React from 'react';
import {List} from 'semantic-ui-react';

const ListContainer = ({listData}) => {return(
<List>		
	{listData.todo.map( (e, i) =><List.Item key={i}>
									<List.Icon name="caret right" key={i+1} /> 
									<List.Content key={i+2}> 
										{e.title} 
									</List.Content>
								</List.Item> )}
</List>
)}

 export default ListContainer;