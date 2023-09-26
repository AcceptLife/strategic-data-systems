import React from "react";
import "./LoginAttemptList.css";

//const data = useState();
const LoginAttempt = (props) => <li {...props}>{props.login}</li>; 
const LoginAttemptList = (props) => (
	 console.log(props),
	<div className="Attempt-List-Main">
	 	<p>Recent activity</p>
	  	<input type="input" placeholder="Filter..." />
		<ul className="Attempt-List">
			{props.data.map((item)=>{
				console.log('list data',item);
				return <li>{item.login} - {item.password}</li>;
			}) 
		} 
		{/* {props.data?.map((obj,i) => 
        <li>obj.login</li>
      )} */}
			{/* <li>{props.data.login}</li> */}
			{/* <LoginAttempt {...props}></LoginAttempt> */}
		</ul>
	</div>
);

export default LoginAttemptList;