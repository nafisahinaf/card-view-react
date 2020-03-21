import React, {Component} from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';

class Home extends Component{
    render(){
        return(
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                 <YouTubeComp 
                 time="7.02" 
                 title="Sick feeling"
                 desc="2000,000,000x ditonton- 1 hari yang lalu"/>
                 <YouTubeComp 
                 time="7.43" 
                 title="Fellin Lonely"
                 desc="9000,000x ditonton- 1 hari yang lalu"/>
                 <YouTubeComp 
                 time="11.11" 
                 title="Best Friend"
                 desc="10,000,000x ditonton- 1 hari yang lalu"/>
                 <YouTubeComp 
                 time="5.12" 
                 title="Sunflower"
                 desc="7000,000x ditonton- 1 hari yang lalu"/>
                 <YouTubeComp /> */}
                 <p>Counter</p>
                 <hr/>
                 <Product/>
            </div>
           
        )
    }
}

export default Home;