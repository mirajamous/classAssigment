import react from "react";
import SecoundComp from "./SecoundComp.js"
import Comment from "./Comment.js"
import CommentContent from "./CommentContent.js"
class Post extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            textArea: "",
            arrofPost: [],
        }
    }

    onWriteText(e) {
        let value = e.target.value;
        this.setState({
            textArea: value
        })
    }

    onAddClicked(e) {
        e.preventDefault();
        const txt = `${this.state.textArea}`;
        if (txt !== "" && txt !== " ") {
            this.state.arrofPost.push({
                textArea:txt
            })
            console.log(txt);
        }
        this.setState({
            textArea: this.state.textArea = '',

        });

    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col"> </div>
                    <div className="col">
                        <form >
                            <div className='comBtnDiv'>
                                <textarea

                                    className="form-control"
                                    name='textArea'
                                    cols="65" rows="8"
                                    value={this.state.textArea}
                                    placeholder="write what you think"
                                    onChange={(event) => this.onWriteText(event)}
                                />
                                <div>
                                    <button type="button" className="btn btn-success mt-3" onClick={this.onAddClicked.bind(this)}>Add Post</button>
                                </div>

                            </div>

                        </form>
                        {/* <div>  <SecoundComp /></div>
                       <div>
                          <Comment />
                       </div> */}



                    </div>
                    <div class="col"></div>

                </div>
            </div>
        )
    }

}
export default Post;
