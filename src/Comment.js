import react from "react";
import CommentContent from "./CommentContent";
class Comment extends react.Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (

            <form >
                <div className="row">
                    <div className="col"></div>
                    <div className="col"> <div className="border border-secondary mt-5" >

                        <textarea className="form-control mt-2" rows="2" placeholder="Write Your comment here">
                        </textarea>
                        {/* <div>  <CommentContent /></div> */}
                    </div>
                    </div>
                    <div className="col"></div>

                </div>


            </form>
        );
    }


}
export default Comment;