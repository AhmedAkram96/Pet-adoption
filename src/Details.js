import {Component } from 'react'
import {withRouter} from 'react-router-dom'
import Carousel from './Carousel';
import ErrorBoundary from "./ErrorBoundary"

class Details extends Component {
    state = { loading: true };
    async componentDidMount(){
        console.log(this.props.match.params.id)
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        )
        const json = await res.json()
        this.setState(Object.assign({loading:false},json.pets[0]))
    }

    render(){
        if(this.state.loading)

            return (  
                <div>
                     <h2 style={{textAlign:"center"}} > Loading...</h2>
                   
                </div>         
                
            )
        else{
            const { animal, breed, city, state, description, name,images } = this.state;

            return(
                <div className="details">
                    <Carousel images={images}/>
                    <div>
                        <h1>{name}</h1>
                        <h2>{animal} - {breed} - {state},{city}</h2>
                        <button>Adopt {name}</button>
                        <p>{description}</p>
                    </div>
                </div>
            )
        }
    }
}
const DetailsWithRouter = withRouter(Details)



export default function DetailsErrorBoundary(props) {
    return (
      <ErrorBoundary>
        <DetailsWithRouter {...props} />
      </ErrorBoundary>
    );
  }