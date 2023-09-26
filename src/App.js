import Header from "./components/common/header/Header";
import Conact from "./components/sub/contact/Contact";
import Department from "./components/sub/department/Department";
import Gallery from "./components/sub/gallery/Gallery";
import Members from "./components/sub/members/Members";
import Youtube from "./components/sub/youtube/Youtube";
import './styles/global.scss'
import { Route } from "react-router-dom/cjs/react-router-dom.min";
function App() {
	return (
	  <>
	  	<Header />
	    	<Route path='/department' component= {Department}/>
			<Route path='/youtube' component={Youtube}/>
			<Route path='/members' component={Members}/>
			<Route path='/Gallery' component={Gallery}/>
			<Route path='/Conact' component={Conact}/>
		</>
	);
}

export default App;
