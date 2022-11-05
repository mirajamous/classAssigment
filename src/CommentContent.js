import react from "react";
class CommentContent extends react.Component {
    constructor(props) {

        super(props);
        this.state = {
            date: "",

        }
    }

    TimeComp() {
        const time = new Date().toLocaleTimeString();
        const date = new Date().toLocaleDateString();
        return (
            <div>
                <span>date: {time}{date}</span>
            </div>
        )
    }



    render() {
        return (
            <div className="row">
                <div className="col"> </div>
                <div className="col">   <div className=" mt-3 "> texttttt</div>
                    {this.TimeComp()}</div>
                <div className="col"> </div>


            </div>
        );
    }



}
export default CommentContent;