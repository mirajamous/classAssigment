import react from 'react';
import Post from "./Post.js"

class SecoundComp extends react.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <form>
                    <div className='row' >
                        <div className='col'></div>
                        <div className='col'>
                            <hr />
                            <div className="secComp">
                                My first Post
                            </div>
                            <button type="button" className="btn btn-light"> Like </button>
                            <button type="button" className="btn btn-light ml-10" > Comment </button>

                        </div>
                        <div className='col'></div>

                    </div>
                </form>
            </div>
        );


    }

}
export default SecoundComp;